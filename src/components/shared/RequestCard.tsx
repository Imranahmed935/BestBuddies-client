/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { UserInfo } from "@/types/user.interface";
import { Eye, MapPin } from "lucide-react";
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

interface PendingRequest {
  id: string;
  sender: UserInfo;
}

interface RequestCardProps {
  pending: PendingRequest;
  handleRequest: (id: string, action:any) => void;
}

const RequestCard = ({ pending, handleRequest }: RequestCardProps) => {
  const request = pending.sender;

  return (
    <div className="max-w-sm mx-auto border rounded-2xl p-4 shadow-sm hover:shadow-md transition my-2">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <Image
            src={request?.profileImage || "/default-avatar.png"}
            alt={request?.fullName || "User"}
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-gray-800">{request?.fullName || "N/A"}</h3>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin size={12} /> {request?.currentLocation || "N/A"}
            </p>
          </div>
        </div>

        {request?.travelInterests?.[0] ? (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              badgeColors[request.travelInterests[0].toUpperCase()] || "bg-gray-100 text-gray-700"
            }`}
          >
            {request.travelInterests[0]}
          </span>
        ) : (
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
            N/A
          </span>
        )}
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => handleRequest(pending.id, "ACCEPT")}
          className="flex-1 bg-blue-500 text-white py-2 rounded-lg font-medium transition hover:bg-blue-600"
        >
          ACCEPT
        </button>
        <button  onClick={() => handleRequest(pending.id, "REJECT")}  className="flex-1 bg-gray-200 border text-slate-900 py-2 rounded-lg font-medium transition hover:bg-gray-300">
          CANCEL
        </button>
        <Link
          href={`/explore-travelers/${request.id}`}
          className="flex items-center justify-center w-10 h-10 border rounded-lg hover:bg-gray-100 transition"
        >
          <Eye size={16} />
        </Link>
      </div>
    </div>
  );
};

export default RequestCard;
