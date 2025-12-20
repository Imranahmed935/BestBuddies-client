/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import ExplorerCard from '@/components/shared/ExplorerCard';
import { UserInfo } from '@/types/user.interface';
import { exploreTravelers } from '@/services/user/explorer';
import BottomDesign from "@/components/shared/BottomDesign";
import TopDesign from "@/components/shared/TopDesign";
import { getPendingRequests, sendConnection } from "@/services/connection/sendRequest";


const LIMIT = 10;

const TravelersPage = () => {
  const [travelers, setTravelers] = useState<UserInfo[]>([]);
  const [search, setSearch] = useState("");
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [sentRequests, setSentRequests] = useState<string[]>([]); // userIds with pending/sent requests

  // Fetch travelers based on search/page
  useEffect(() => {
    const fetchTravelers = async () => {
      const filters: { interest?: string; page: number; limit: number } = {
        page,
        limit: LIMIT,
      };

      if (search) filters.interest = search;

      const res = await exploreTravelers(filters);

      if (res.success) {
        setTravelers(res.data);
        if (res.meta?.total) {
          setTotalPages(Math.ceil(res.meta.total / LIMIT));
        } else {
          setTotalPages(1);
        }
      }
    };

    fetchTravelers();
  }, [search, page]);

 
  useEffect(() => {
    const fetchPending = async () => {
      try {
        const res = await getPendingRequests();
        if (res.success && Array.isArray(res.data)) {
      
          const pendingUserIds = res.data?.map((req: any) => req.receiver?.id);
          setSentRequests(pendingUserIds);
        }
      } catch (error) {
        console.error("Failed to fetch pending requests:", error);
      }
    };

    fetchPending();
  }, []);

  const filteredTravelers = travelers.filter(traveler =>
    onlyVerified ? traveler.verified : true
  );


  const handleConnect = async (userId: string) => {
    if (sentRequests.includes(userId)) return; 

    const res = await sendConnection({ receiverId: userId })

    if (res.success) {
      setSentRequests(prev => [...prev, userId]);
    } else {
      console.error("Failed to send connection request:", res.message);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <TopDesign />

      {/* Search and filter */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or interest..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        />
        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            checked={onlyVerified}
            onChange={() => setOnlyVerified(prev => !prev)}
            className="w-4 h-4"
          />
          Verified Users Only
        </label>
      </div>

      {/* Travelers grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredTravelers.length > 0 ? (
          filteredTravelers.map(traveler => (
            <ExplorerCard
              key={traveler.id}
              userInfo={traveler}
              onConnect={handleConnect}
              isRequestSent={sentRequests.includes(traveler.id)} 
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No travelers found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <BottomDesign />
    </div>
  );
};

export default TravelersPage;
