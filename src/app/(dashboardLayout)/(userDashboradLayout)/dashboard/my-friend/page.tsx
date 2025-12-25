/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import FriendCard from "@/components/shared/FriendCard";
import RequestCard from "@/components/shared/RequestCard";
import {
  getMyFriends,
  getPendingRequests,
  respondConnection,
} from "@/services/connection/sendRequest";
import { UserInfo } from "@/types/user.interface";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const FriendPage = () => {
  const [friendsData, setFriendsData] = useState<UserInfo[]>([]);
  const [pendingFriends, setPendingFriends] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const friends = await getMyFriends();
      const pending = await getPendingRequests();
      setFriendsData(friends?.data || []);
      setPendingFriends(pending?.data || []);
    };
    fetchData();
  }, []);

  const handleRequest = async (id: string, action: any) => {
   await respondConnection(id, action);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl font-bold">My Friends</h1>

        <Link
          href="/explore-travelers"
          className="mt-4 md:mt-0 inline-flex items-center gap-1.5 
               border border-yellow-400 text-yellow-500 
               px-4 py-2 rounded-lg text-sm font-medium 
               hover:bg-yellow-50 transition"
        >
          View all
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
        {friendsData.slice(0, 4).map((friend: UserInfo) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl  font-bold">Friend Requests</h1>
        </div>

        {pendingFriends.length === 0 ? (
          <div className="flex flex-col items-center justify-center border rounded-xl py-10 text-center text-gray-500">
            <p className="text-sm">No friend requests at the moment</p>
            <p className="text-xs mt-1">
              Explore travelers and send a connection request ✨
            </p>
            <Link
              href="/explore-travelers"
              className=" mt-4 text-black px-4 py-2 rounded-lg text-sm font-medium bg-gray-200"
            >
              Find New Friends
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingFriends.map((pending: any) => (
              <RequestCard
                key={pending.id}
                pending={pending}
                handleRequest={handleRequest}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendPage;
