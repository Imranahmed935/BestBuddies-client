// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useEffect } from "react";
// import { getCookie } from "@/services/auth/tokenHandlers";
// import { getSocket } from "@/lib/socket";

// const SocketDebug = () => {
//   useEffect(() => {
//     let socket: any;

//     const initSocket = async () => {
//       const token = await getCookie("accessToken");
//       if (!token) return;

//       socket = await getSocket(); 

//       socket.auth = { token };
//       socket.connect();

//       socket.on("connect", () => {
//         console.log("🟢 Socket connected:", socket.id);
//       });

//       socket.on("connect_error", (err: any) => {
//         console.error("❌ Socket error:", err.message);
//       });
//     };

//     initSocket();

//     return () => {
//       if (socket) {
//         socket.off("connect");
//         socket.off("connect_error");
//         socket.disconnect();
//       }
//     };
//   }, []);

//   return null;
// };

// export default SocketDebug;
