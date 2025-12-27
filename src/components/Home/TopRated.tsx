/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getAllPlan } from "@/services/travel/travelPlan";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Traveler {
  id: string;
  name: string;
  age?: number;
  profileImage?: string;
  location?: string;
  tags?: string[];
  rating: number;
}

const TopRated = () => {
  const [travelers, setTravelers] = useState<Traveler[]>([]);

  useEffect(() => {
    const fetchTopHosts = async () => {
      try {
        const res = await getAllPlan();
        const plans = res.data;
        const hostMap: Record<string, any> = {};

        plans.forEach((plan: any) => {
          const host = plan.host;
          if (!host) return;

          if (!hostMap[host.id]) {
            hostMap[host.id] = {
              id: host.id,
              name: host.fullName,
              age: host.age,
              profileImage: host.profileImage,
              location: host.currentLocation,
              tags: host.travelInterests || [],
              ratings: [],
            };
          }

          const planRatings = plan.reviews?.map((r: any) => r.rating) || [];
          hostMap[host.id].ratings.push(...planRatings);
        });

        const hostsWithAvgRating = Object.values(hostMap).map((host: any) => {
          const ratings = host.ratings;
          const avgRating =
            ratings.length > 0
              ? ratings.reduce((a: number, b: number) => a + b, 0) /
                ratings.length
              : 0;
          return { ...host, rating: Math.round(avgRating * 10) / 10 };
        });

        const topRated = hostsWithAvgRating.sort((a, b) => b.rating - a.rating);

        setTravelers(topRated.slice(0, 4));
      } catch (error) {
        console.error("Error fetching hosts:", error);
      }
    };

    fetchTopHosts();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-[#111111] dark:text-foreground">
            Meet Our Top Rated Hosts
          </h2>
          <Link
            href={`/explore-travelers`}
            className="text-sm font-medium text-gray-500 dark:hover:text-gray-300 hover:text-black flex items-center gap-1"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelers.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-accent rounded-[28px] p-4 shadow-sm border"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={t.profileImage || "/default-avatar.png"}
                  alt={t.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white dark:text-gray-600 px-2 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  {t.rating}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center dark:text-gray-200 gap-1 font-semibold text-[#111111]">
                  {t.name}, {t.age}
                  <BadgeCheck size={16} className="text-blue-500" />
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <MapPin size={14} />
                  {t.location}
                </div>

                <div className="flex gap-2 mt-3 flex-wrap">
                  {t.tags?.slice(0, 4)?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 py-2 dark:text-black rounded-full border text-sm font-medium bg-[#F5C400] hover:bg-[#E6B800] transition flex items-center justify-center">
                    Connect
                  </button>
                  <Link
                    href={`/explore-travelers/${t.id}`}
                    className="flex-1 py-2 rounded-full dark:bg-accent border dark:hover:bg-yellow-400 text-sm font-medium hover:bg-gray-100 transition flex items-center justify-center"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRated;
