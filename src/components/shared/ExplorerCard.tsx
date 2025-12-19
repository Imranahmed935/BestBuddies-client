"use client";

import { UserInfo } from "@/types/user.interface";
import Image from "next/image";
import { MapPin, CheckCircle } from "lucide-react"; // Using filled CheckCircle for verified
import Link from "next/link";

interface ExplorerCardProps {
  userInfo: UserInfo;
}

const ExplorerCard = ({ userInfo }: ExplorerCardProps) => {
  return (
    <div className="bg-white rounded shadow-md p-4 flex flex-col justify-between w-72 ">
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="relative w-16 h-16">
            <div className="w-16 h-16 rounded-full overflow-hidden relative">
              <Image
                src={userInfo.profileImage || "/avatar.png"}
                alt={userInfo.fullName}
                fill
                className="object-cover"
              />
            </div>
            {userInfo.verified && (
              <div className="absolute -bottom-1 -right-1">
                <CheckCircle className="w-5 h-5 text-blue-500" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg flex items-center">
              {userInfo.fullName}, {userInfo.age}
            </h3>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{userInfo.currentLocation}</span>
            </div>
          </div>
        </div>

  
        <div className="flex flex-wrap gap-2">
          {userInfo.travelInterests?.slice(0, 3).map((interest, idx) => (
            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
              #{interest}
            </span>
          ))}
        </div>
      </div>

     
      <div className="flex space-x-2 mt-4">
        <Link
          href={`/explore-travelers/${userInfo.id}`}
          className="flex-1 py-2 px-3 bg-gray-100 rounded-lg text-sm text-center hover:bg-gray-200"
        >
          View Details
        </Link>
        <button className="flex-1 py-2 px-3 bg-yellow-400 rounded-lg text-sm text-black font-medium hover:bg-yellow-500">
          Connect
        </button>
      </div>
    </div>
  );
};

export default ExplorerCard;
