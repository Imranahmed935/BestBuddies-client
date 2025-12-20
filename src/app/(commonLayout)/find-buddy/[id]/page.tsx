import { getTravelById } from "@/services/travel/travelPlan";
import { TravelPlan } from "@/types/travelPlan.interface";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}

const FindBuddyDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const response = await getTravelById(id);

  if (!response.success || !response.data) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        Travel plan not found
      </div>
    );
  }

  const travel: TravelPlan = response.data;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      {/* Hero Section */}
      <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={travel?.photoUrl || "/placeholder.jpg"} 
          alt={travel.title}
          fill 
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-4xl text-white font-bold drop-shadow-lg">
            {travel.title}
          </h1>
          <p className="text-white text-lg md:text-xl drop-shadow-sm">
            {travel.destination}
          </p>
        </div>
      </div>

    
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">Trip Details</h2>
            <p className="text-gray-700">{travel.description}</p>

            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <strong>Start:</strong>{" "}
                {new Date(travel.startDate).toLocaleDateString()}
              </div>
              <div>
                <strong>End:</strong>{" "}
                {new Date(travel.endDate).toLocaleDateString()}
              </div>
              <div>
                <strong>Budget:</strong> ${travel.budget}
              </div>
              <div>
                <strong>Travel Type:</strong> {travel.travelType}
              </div>
              <div>
                <strong>Transport:</strong> {travel.transportType}
              </div>
              <div>
                <strong>Accommodation:</strong> {travel.accommodationType}
              </div>
              <div>
                <strong>Meal Plan:</strong> {travel.mealPlan}
              </div>
              <div>
                <strong>Age Limit:</strong> {travel.ageLimit}+
              </div>
            </div>
          </div>

  
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Reviews</h2>
            {(!travel.reviews || travel.reviews.length === 0) && (
              <p className="text-gray-500">No reviews yet.</p>
            )}
            {travel.reviews?.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold">
                  {review.reviewer?.fullName || "Anonymous"}
                </p>
                <p className="text-yellow-500">⭐ {review.rating}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Host Card */}
        {travel.host && (
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">Host Information</h2>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {travel.host.fullName}
              </p>
              <p>
                <strong>Email:</strong> {travel.host.email}
              </p>
              <p>
                <strong>Emergency Contact:</strong> {travel.emergencyContact}
              </p>
              <p>
                <strong>Meeting Point:</strong> {travel.meetingPoint}
              </p>
            </div>

            {/* Action Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
              Connect with Host
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBuddyDetailsPage;
