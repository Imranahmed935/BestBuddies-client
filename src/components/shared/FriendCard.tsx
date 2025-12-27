"use client";

import React from "react";
import { Eye, MapPin } from "lucide-react";
import { UserInfo } from "@/types/user.interface";
import Image from "next/image";
import Link from "next/link";


const badgeColors: Record<string, string> = {
  MUSEUMS: "bg-blue-100 text-blue-700",
  "STREET FOOD": "bg-pink-100 text-pink-700",
  PHOTOGRAPHY: "bg-orange-100 text-orange-700",
  BACKPACKER: "bg-yellow-100 text-yellow-700",
  HIKER: "bg-green-100 text-green-700",
  ADVENTURER: "bg-purple-100 text-purple-700",
  FOODIE: "bg-red-100 text-red-700",
};

interface FriendCardProps {
  friend: UserInfo;
}

const FriendCard = ({ friend }: FriendCardProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 ">
      <div className="max-w-sm mx-auto border dark:bg-accent rounded-2xl p-4 shadow-sm hover:shadow-md transition">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <Image
              src={friend.profileImage || "/default-avatar.png"}
              alt={friend.fullName}
              width={30}
              height={30}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">{friend.fullName}</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin size={12} /> {friend.currentLocation}
              </p>
            </div>
          </div>

          {friend.travelInterests?.[0] && (
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                badgeColors[friend.travelInterests[0].toUpperCase()] ||
                "bg-gray-100 text-gray-700"
              }`}
            >
              {friend.travelInterests[0]}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900 py-2 rounded-lg font-medium transition">
            Message
          </button>
          <Link href={`/explore-travelers/${friend.id}`} className="flex items-center justify-center w-10 h-10 border rounded-lg hover:bg-gray-100 transition">
            <Eye size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
