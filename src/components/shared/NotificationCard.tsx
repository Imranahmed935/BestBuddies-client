/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { getPendingTripRequests } from "@/services/join/join";

interface Sender {
  id: string;
  username: string;
  fullName: string;
  profileImage?: string;
}

interface Metadata {
  planId: string;
  joinRequestId: string;
}

interface NotificationCardProps {
  cardValues: {
    id: string;
    receiverId: string;
    senderId: string;
    type: string;
    title: string;
    message: string;
    metadata: Metadata;
    isRead: boolean;
    createdAt: string | Date;
    updatedAt: string | Date;
    sender: Sender;
  };
  handleAcceptTrip: (id: string, action: "ACCEPT" | "REJECT") => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ cardValues, handleAcceptTrip }) => {
  const { sender, message, isRead, createdAt, metadata } = cardValues;
  const [tripStatus, setTripStatus] = useState<string>("");

  // fetch initial status
  useEffect(() => {
    const fetchPendingRequests = async () => {
      const requests = await getPendingTripRequests();
      const status = requests?.data?.find((r: any) => r.id === metadata.joinRequestId)?.status;
      setTripStatus(status || "");
    };
    fetchPendingRequests();
  }, [metadata.joinRequestId]);

  // handle button actions and update local state
  const handleAction = async (action: "ACCEPT" | "REJECT") => {
    await handleAcceptTrip(metadata.joinRequestId, action);
    if (action === "ACCEPT") setTripStatus("ACCEPTED");
    if (action === "REJECT") setTripStatus("REJECTED"); 
  };

  return (
    <div
      className={`flex items-center gap-4 p-3 rounded-xl border transition ${
        isRead ? "bg-white border-gray-200" : "bg-yellow-50 border-yellow-300"
      }`}
    >
      <Image
        src={sender.profileImage || "/default-avatar.png"}
        alt={sender.fullName}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />

      <Link href={`/explore-travelers/${sender.id}`} className="flex-1 cursor-pointer">
        <p className="text-sm font-semibold text-gray-700">{message}</p>
        <div className="mt-1 text-xs text-gray-400">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </div>
      </Link>

      <div className="flex gap-2">
        {tripStatus === "ACCEPTED" ? (
          <>
            <button className="px-3 py-1.5 text-sm rounded-md bg-green-600 text-white hover:bg-green-700 transition">
              Message
            </button>
            <button className="px-3 py-1.5 text-sm rounded-md bg-gray-200 text-black transition">
              Details
            </button>
          </>
        ) : (
          <>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAction("ACCEPT"); }}
              className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Accept
            </button>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAction("REJECT"); }}
              className="px-3 py-1.5 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};


export default NotificationCard;
