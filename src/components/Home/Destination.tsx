/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getAllPlan } from "@/services/travel/travelPlan";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface DestinationItem {
  id: string;
  name: string;
  country: string;
  photoUrl: string;
  buddies?: number;
}

const Destination = () => {
  const [destinations, setDestinations] = useState<DestinationItem[]>([]);

  useEffect(() => {
    const fetchTopDestinations = async () => {
      try {
        const res = await getAllPlan();
        const plans = res.data;

        const destinationList = plans.map((plan: any) => ({
          id: plan.id,
          name: plan.destination,
          country: plan.destination,
          photoUrl: plan.photoUrl || "/default-destination.jpg",
          buddies: plan.joinedParticipants?.length || 0,
        }));

        setDestinations(destinationList.slice(1, 4));
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchTopDestinations();
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold dark:text-accent-foreground">Popular Destinations</h2>
            <p className="text-gray-500 text-sm">
              Trending places our community is exploring right now.
            </p>
          </div>
          <Link href={`/find-buddy`} className="text-sm font-medium text-gray-500  hover:text-yellow-400 transition flex items-center gap-1">
            See all → 
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="relative h-[420px] rounded-3xl overflow-hidden group"
            >
              <img
                src={item.photoUrl}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <span className="absolute top-4 right-4 px-3 py-1 text-xs rounded-full bg-white/80 backdrop-blur text-gray-800">
                {item.buddies}
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-200 flex items-center gap-1">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                  {item.country}
                </p>

                <Link
                  href={`/find-buddy/${item.id}`}
                  className="w-full py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-yellow-400 hover:text-black transition text-center flex items-center justify-center"
                >
                  Find Buddy in {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
