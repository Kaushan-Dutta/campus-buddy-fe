import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "./peer";
import { useSocket } from "./SocketProvider";

const RoomPage: React.FC = () => {
  const { socket } = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState<string | null>();
  const [myStream, setMyStream] = useState<MediaStream | null>();
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>();

  const handleUserJoined = useCallback(({ email, id }: any) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncomingCall = useCallback(
    async ({ from, offer }: any) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream?.getTracks() || []) {
      peer.peer?.addTrack(track, myStream as any);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }: any) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegotiationNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:negotiation:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer?.addEventListener("negotiationneeded", handleNegotiationNeeded);
    return () => {
      peer.peer?.removeEventListener("negotiationneeded", handleNegotiationNeeded);
    };
  }, [handleNegotiationNeeded]);

  const handleNegotiationNeededIncoming = useCallback(
    async ({ from, offer }: any) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:negotiation:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegotiationNeededFinal = useCallback(async ({ ans }: any) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer?.addEventListener("track", async (ev: any) => {
      const remoteStream = ev.streams[0];
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incoming:call", handleIncomingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:negotiation:needed", handleNegotiationNeededIncoming);
    socket.on("peer:negotiation:final", handleNegotiationNeededFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incoming:call", handleIncomingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:negotiation:needed", handleNegotiationNeededIncoming);
      socket.off("peer:negotiation:final", handleNegotiationNeededFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncomingCall,
    handleCallAccepted,
    handleNegotiationNeededIncoming,
    handleNegotiationNeededFinal,
  ]);

  return (
    <div className="w-full text-center ">
      <h1>Room Page</h1>
      <h4>{remoteSocketId ? "Connected" : "No one in the room"}</h4>
      {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}
      <div className="flex flex-row justify-center ">
        {myStream && (
            <>
            <h1 className="text-center">My Stream</h1>
            <ReactPlayer
                playing
                muted
                height="500px"
                width="500px"
                url={myStream} // Use the MediaStream directly, no need for URL.createObjectURL
                />
            </>
        )}
      </div>
      
    </div>
  );
};

export default RoomPage;