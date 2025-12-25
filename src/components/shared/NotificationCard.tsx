import React from "react";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

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
}

const NotificationCard: React.FC<NotificationCardProps> = ({ cardValues }) => {
  const { sender, message, isRead, createdAt, type } = cardValues;

  return (
    <div
      className={`flex gap-3 p-3 rounded-lg border ${
        isRead ? "bg-white" : "bg-yellow-50 border-yellow-300"
      }`}
    >
      <Image
        src={sender.profileImage || "/default-avatar.png"}
        alt={sender.fullName}
        width={30}
        height={30}
        className="w-12 h-12 rounded-full object-cover"
      />

      <div className="flex flex-col justify-center">
        <h4 className="font-semibold text-gray-800">{sender.fullName}</h4>
        <p className="text-sm text-gray-600">{message}</p>
        <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
          <span className="capitalize">{type.replace(/_/g, " ")}</span>
          <span>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
