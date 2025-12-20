import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";
import { TravelPlan } from "@/types/travelPlan.interface";
import Link from "next/link";

const TravelPlanCard = ({ travel }: { travel: TravelPlan }) => {
  const host = travel.host;

  const start = new Date(travel.startDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const end = new Date(travel.endDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white shadow-md border hover:shadow-lg transition">
      {/* Image Section */}
      <div className="relative h-[200px]">
        <Image
          src={travel.photoUrl || "/placeholder.jpg"}
          alt={travel.title}
          fill
          priority
          className="object-cover"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          {travel.members} spots left
        </div>

        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          ${travel.budget} est.
        </div>

        {/* Title */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-xs flex items-center gap-1 text-yellow-400 font-semibold mb-1">
            <MapPin size={14} />
            {travel.travelType}
          </span>
          <h3 className="text-lg font-bold leading-tight line-clamp-2">
            {travel.title}
          </h3>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between text-sm text-gray-600">
          <div>
            <p className="text-xs uppercase text-gray-400">Location</p>
            <p className="font-medium text-gray-800 flex items-center gap-1">
              <MapPin size={14} />
              {travel.destination}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase text-gray-400">Dates</p>
            <p className="font-medium text-gray-800 flex items-center gap-1 justify-end">
              <CalendarDays size={14} />
              {start} – {end}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src={host?.profileImage || "/user-placeholder.png"}
            alt={host?.fullName || "Host"}
            width={36}
            height={36}
            className="rounded-full object-cover border"
          />

          <div className="text-sm leading-tight">
            <p className="font-medium text-gray-800">
              {host?.fullName || "Unknown Host"}
            </p>

            {host?.currentLocation && (
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin size={12} />
                {host.currentLocation}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-3 pt-3">
          <Link
            href={`/find-buddy/${travel.id}`}
            className="flex-1 inline-flex items-center justify-center border border-gray-300 text-sm font-medium py-2 rounded-full hover:bg-gray-100 transition"
          >
            Details
          </Link>

          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold py-2 rounded-full transition"
          >
            Join Trip →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanCard;
