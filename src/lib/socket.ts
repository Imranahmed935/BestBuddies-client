
import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const getSocket = (token:string) => {
  console.log("yes",token)
  if (!socket) {
    socket = io("http://localhost:5000", {
      transports: ["websocket"],
      withCredentials: true,
      auth: { token }, 
      autoConnect: true, 
    });
  }

  return socket;
};

