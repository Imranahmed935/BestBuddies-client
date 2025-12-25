"use client";
import FindBuddyCard from "@/components/shared/FindBuddyCard";
import TravelPlanCard from "@/components/shared/TravelPlanCard";
import { sendJoinRequest } from "@/services/join/join";

import { TravelPlan } from "@/types/travelPlan.interface";
import { useState, useMemo } from "react";

export const FindBuddyPageClient = ({ plans }: { plans: TravelPlan[] }) => {
  const [destination, setDestination] = useState("");
  const [sortPrice, setSortPrice] = useState<"asc" | "desc">("asc");

  const filteredPlans = useMemo(() => {
    let result = [...plans];

    if (destination.trim()) {
      result = result.filter((plan) =>
        plan.destination.toLowerCase().includes(destination.toLowerCase())
      );
    }

    result.sort((a, b) =>
      sortPrice === "desc" ? a.budget - b.budget : b.budget - a.budget
    );

    return result;
  }, [plans, destination, sortPrice]);

  const handleJoinTrip = async (planId: string)=>{
    const data = await sendJoinRequest(planId)
    console.log(data)
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <FindBuddyCard />
      <div className="flex flex-col md:flex-row gap-4 mb-6">
       
        <input
          type="text"
          placeholder="Search by destination"
          className="border border-gray-300 rounded-md px-4 py-2 flex-grow"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

   
        <select
          className="border border-gray-300 rounded-md px-4 py-2 flex-shrink w-[10%]"
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value as "asc" | "desc")}
        >
          <option value="sort by price">sort by price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPlans.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No travel plans found.
          </p>
        ) : (
          filteredPlans.map((plan) => (
            <TravelPlanCard key={plan.id} travel={plan} handleJoinTrip={handleJoinTrip}/>
          ))
        )}
      </div>
    </div>
  );
};
