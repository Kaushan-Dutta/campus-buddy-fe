import React, { createContext, useMemo, useContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

type SocketContextType = {
  socket: Socket; // Define the Socket type from "socket.io-client"
};

const SocketContext = createContext<SocketContextType | null>(null);

export const useSocket = (): SocketContextType => {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socketContext;
};

type SocketProviderProps = {
  children: ReactNode;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const socket = useMemo(() => io("https://campus-buddy-be.vercel.app/"), []);
  const value: SocketContextType = {
    socket,
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};
