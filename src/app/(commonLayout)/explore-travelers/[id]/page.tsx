"use client";

import Image from "next/image";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { getExploreTravelerById } from "@/services/user/explorer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { UserInfo } from "@/types/user.interface";

const ExplorerDetailsPage = () => {
  const params = useParams();
  const id = params.id;

  const [traveler, setTraveler] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchTraveler = async () => {
      try {
        const res = await getExploreTravelerById(id as  string);
        setTraveler(res.data.data);
      } catch (error) {
        console.error("Error fetching traveler details:", error);
      }
    };
    fetchTraveler();
  }, [id]);

  if (!traveler) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <div className="flex items-center space-x-6">
        <div className="relative w-24 h-24">
          <div
            className={`w-24 h-24 rounded-full overflow-hidden relative border-4 ${
              traveler.verified ? "border-yellow-400" : "border-gray-200"
            }`}
          >
            <Image
              src={traveler.profileImage || "/avatar.png"}
              alt={traveler.fullName}
              fill
              className="object-cover"
            />
          </div>

        </div>

        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {traveler.fullName}{" "}
            {traveler.verified && (
              <CheckCircle className="w-5 h-5 text-blue-500" />
            )}
          </h1>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {traveler.currentLocation}
          </p>
          <p className="text-gray-500 text-sm">
            Age: {traveler.age}, Gender: {traveler.gender}
          </p>
          <p className="text-gray-500 text-sm">Rating: {traveler.rating || "N/A"}</p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Bio</h2>
        <p className="text-gray-700">{traveler.bio || "No bio available."}</p>
      </div>

      {/* Travel Interests */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Travel Interests</h2>
        <div className="flex flex-wrap gap-2">
          {traveler.travelInterests?.map((interest, idx) => (
            <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              #{interest}
            </span>
          ))}
        </div>
      </div>

      {/* Visited Countries */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Visited Countries</h2>
        <div className="flex flex-wrap gap-2">
          {traveler.visitedCountries?.map((country, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
            >
              {country}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Contact</h2>
        <p className="flex items-center gap-2 text-gray-700">
          <Phone className="w-4 h-4" /> {traveler.contactNumber || "N/A"}
        </p>
        <p className="text-gray-700">{traveler.email}</p>
      </div>

      {/* Connect Button */}
      <div className="mt-6">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-lg">
          Connect
        </button>
      </div>
    </div>
  );
};

export default ExplorerDetailsPage;
