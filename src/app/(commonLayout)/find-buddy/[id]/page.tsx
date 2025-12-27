import AddComment from "@/components/AddComment";
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
      <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={travel.photoUrl || "/placeholder.jpg"}
          alt={travel.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            {travel.title}
          </h1>
          <p className="text-white text-lg">
            {travel.destination}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white dark:bg-accent p-6 rounded-xl shadow space-y-4">
            <h2 className="text-2xl font-semibold">Trip Details</h2>
            <p className="text-gray-700 dark:text-gray-300">{travel.description}</p>

            <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 text-sm">
              <div><strong>Start:</strong> {new Date(travel.startDate).toLocaleDateString()}</div>
              <div><strong>End:</strong> {new Date(travel.endDate).toLocaleDateString()}</div>
              <div><strong>Budget:</strong> ${travel.budget}</div>
              <div><strong>Travel Type:</strong> {travel.travelType}</div>
              <div><strong>Transport:</strong> {travel.transportType}</div>
              <div><strong>Accommodation:</strong> {travel.accommodationType}</div>
              <div><strong>Meal Plan:</strong> {travel.mealPlan}</div>
              <div><strong>Age Limit:</strong> {travel.ageLimit}+</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Reviews</h2>
              <AddComment details={travel} />
            </div>

            {(!travel.reviews || travel.reviews.length === 0) && (
              <p className="text-gray-500">No reviews yet.</p>
            )}

            {travel.reviews?.map((review) => (
              <div
                key={review.id}
                className="bg-white dark:bg-accent p-5 rounded-xl shadow flex gap-4"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border">
                  <Image
                    src={review.reviewer?.profileImage || "/user-placeholder.png"}
                    alt={review.reviewer?.fullName || "Reviewer"}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold ">
                      {review.reviewer?.fullName || "Anonymous"}
                    </p>
                    <span className="text-yellow-500 text-sm">
                      ⭐ {review.rating}/5
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mt-1 dark:text-gray-300">
                    {review.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {travel.host && (
          <div className="bg-white dark:bg-accent p-6 rounded-xl shadow space-y-4 sticky top-24 h-fit">
            <h2 className="text-2xl font-semibold">Host Information</h2>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border">
                <Image
                  src={travel.host.profileImage || "/user-placeholder.png"}
                  alt={travel.host.fullName}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-semibold dark:text-gray-300">
                  {travel?.host?.fullName}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {travel?.host?.email}
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Emergency Contact:</strong>{" "}
              {travel.emergencyContact}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBuddyDetailsPage;
