"use client";

import { useState, useEffect } from "react";
import ExplorerCard from '@/components/shared/ExplorerCard';
import { exploreTravelers } from '@/services/user/explorer';
import { UserInfo } from '@/types/user.interface';

const TravelersPage = () => {
  const [travelers, setTravelers] = useState<UserInfo[]>([]);
  const [search, setSearch] = useState("");
  const [onlyVerified, setOnlyVerified] = useState(false);

  useEffect(() => {
    const fetchTravelers = async () => {
      const data = await exploreTravelers();
      setTravelers(data.data);
    };
    fetchTravelers();
  }, []);

  const filteredTravelers = travelers.filter(traveler => {
    const matchesSearch = traveler.fullName.toLowerCase().includes(search.toLowerCase());
    const matchesVerified = onlyVerified ? traveler.verified : true;
    return matchesSearch && matchesVerified;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Explore & Connect</h1>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredTravelers.length > 0 ? (
          filteredTravelers.map(traveler => (
            <ExplorerCard key={traveler.id} userInfo={traveler} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No travelers found.</p>
        )}
      </div>
    </div>
  );
};

export default TravelersPage;
