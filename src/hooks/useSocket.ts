

// import { getSocket } from "@/lib/socket";
// import { useEffect } from "react";


// interface User {
//   id: string;
//   fullName?: string;
// }

// export const useSocket = (user: User | null) => {
//   useEffect(() => {
//     if (user?.id) {
//       getSocket.emit("join-room", user.id);
//       console.log(`Joined room: ${user.id}`);
//     }

//     return () => {
//       if (user?.id) {
//         socket.off("join-request-received");
//         socket.off("join-request-response");
//       }
//     };
//   }, [user?.id]);
// };
