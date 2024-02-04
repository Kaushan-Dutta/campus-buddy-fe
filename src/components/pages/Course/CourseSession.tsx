import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "./SocketProvider";
import { userData } from "../../../context/AuthContext";

const CourseSession: React.FC = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const {user}=userData();
  const { socket } = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (socket) {
        socket.emit("room:join", { email, room });
      }
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data: { email: string; room: string }) => {
      const { email, room } = data;
      navigate(`/${user?.entity}/${user?._id}/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (socket) {
      socket.on("room:join", handleJoinRoom);

      return () => {
        socket.off("room:join", handleJoinRoom);
      };
    }
  }, [socket, handleJoinRoom]);

  return (
    <div className="session">
      <h1 className="session-heading">Session</h1>
      <form onSubmit={handleSubmitForm} className="session-form">
        <label htmlFor="email" className="label">Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <br />
        <label htmlFor="room" className="label">Room Number</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className="input"
        />
        <br />
        <button type="submit" className="join-btn">Join</button>
      </form>
    </div>
  );
};

export default CourseSession;
