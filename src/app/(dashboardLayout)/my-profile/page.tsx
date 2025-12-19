/* eslint-disable @typescript-eslint/no-explicit-any */

import { getUserInfo } from "@/services/auth/getUserInfo";
import { MapPin, Share2, Mail, BadgeCheck, Star } from "lucide-react";

const MyProfilePage = async () => {
  const user = await getUserInfo();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">User not found</p>
      </div>
    );
  }

  const {
    fullName,
    username,
    age,
    bio,
    currentLocation,
    profileImage,
    rating,
    subscriptionActive,
    travelInterests = [],
    visitedCountries = [],
    verified,
  } = user;

  return (
    <div className="bg-slate-50">

      {/* HERO */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 -mt-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* PROFILE CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="relative w-32 h-32 mx-auto -mt-24">
              <img
                src={profileImage || "/avatar.png"}
                alt={fullName}
                className="w-full h-full rounded-full object-cover border-4 border-yellow-400 bg-white"
              />
            </div>

            <div className="flex justify-center items-center gap-2 mt-4">
              <h2 className="text-xl font-semibold">{fullName}</h2>
              {verified && (
                <BadgeCheck
                  className="text-blue-500"
                  size={20}
                />
              )}
            </div>

            <p className="text-sm text-gray-500">@{username}</p>

            <div className="flex justify-center items-center gap-1 mt-2 text-sm text-gray-500">
              <MapPin size={14} />
              {currentLocation}
            </div>

            <button className="mt-5 w-full bg-yellow-400 hover:bg-yellow-500 transition text-black font-medium py-2 rounded-xl">
              Edit Profile
            </button>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 border rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <Share2 size={16} /> Share
              </button>
              <button className="flex-1 border rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <Mail size={16} /> Contact
              </button>
            </div>

            {/* STATUS */}
            {subscriptionActive && (
              <div className="mt-6 bg-green-50 text-green-700 text-sm rounded-xl p-3 text-left">
                🟢 Subscription Active — available for trips
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Countries" value={visitedCountries.length} />
              <StatCard label="Age" value={age} />
              <StatCard label="Trips" value={12} />
              <StatCard
                label="Rating"
                value={
                  rating > 0 ? (
                    <span className="flex items-center justify-center gap-1">
                      <Star size={16} className="text-yellow-400" />
                      {rating}
                    </span>
                  ) : (
                    "New"
                  )
                }
              />
            </div>

            {/* ABOUT */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">About Me</h3>
              <p className="text-gray-600 leading-relaxed">{bio}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {travelInterests.map((interest: string) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-900"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* COUNTRIES */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">
                Visited Countries
              </h3>
              <div className="flex flex-wrap gap-3">
                {visitedCountries.map((country: string) => (
                  <span
                    key={country}
                    className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm"
                  >
                    🌍 {country}
                  </span>
                ))}
              </div>
            </div>

            {/* REVIEWS */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">What Buddies Say</h3>
                <span className="text-sm text-blue-600 cursor-pointer">
                  View All →
                </span>
              </div>

              <p className="text-sm text-gray-500">
                No reviews yet. Be the first travel buddy to leave a review ⭐
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

/* STAT CARD */
const StatCard = ({
  label,
  value,
}: {
  label: string;
  value: any;
}) => (
  <div className="bg-white rounded-xl shadow-md p-4 text-center">
    <div className="text-xl font-semibold">{value}</div>
    <p className="text-gray-500 text-sm">{label}</p>
  </div>
);

export default MyProfilePage;
