/* eslint-disable @typescript-eslint/no-explicit-any */


"use client";

import { useEffect, useRef } from "react";
import { getCookie } from "@/services/auth/tokenHandlers";
import { toast } from "react-toastify";
import { getSocket } from "@/lib/socket";

const Notifications = () => {
  const socketRef = useRef<any>(null);

  useEffect(() => {
    const initNotifications = async () => {
      const token = await getCookie("accessToken");
      if (!token) return;
      const socket = getSocket(token);
      socketRef.current = socket;
      if (!socket.connected) {
        socket.connect();
      }

      socket.on("connect", () => {
        console.log("🟢 Socket connected:", socket.id);
      });

      socket.on("notification", (data: any) => {
        console.log("🔔 New notification:", data);
        toast.info(data.message || "New Notification!");
        window.dispatchEvent(new CustomEvent("new-notification", { detail: data }));
      });

      socket.on("connect_error", (err: any) => {
        console.error("❌ Socket error:", err.message);
      });
    };

    initNotifications();

    return () => {
      if (socketRef.current) {
        socketRef.current.off("notification");
        socketRef.current.off("connect");
        socketRef.current.off("connect_error");
      }
    };
  }, []);

  return null;
};

export default Notifications;
