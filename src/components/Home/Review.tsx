import React from "react";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    time: "2 days ago",
    rating: 5,
    text: "I found my best friend in Bali through this app! We've been traveling together for months now. Highly recommend for solo travelers looking for genuine connections.",
    likes: 12,
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    name: "Mike Ross",
    time: "1 week ago",
    rating: 5,
    text: "Great way to meet locals and other travelers. The verification process made me feel safe meeting up with new people in unfamiliar cities.",
    likes: 45,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Elena G.",
    time: "3 weeks ago",
    rating: 4,
    text: "Used this for my trip to Europe. Found amazing companions for day trips in Rome and Paris. The interface is super easy to use and intuitive.",
    likes: 8,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

const Review = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Stories from the Road</h2>
          <p className="text-gray-500 mt-2">Real connections made by travelers just like you.</p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <span className="text-sm text-gray-400">{review.time}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm mb-4">{review.text}</p>

              {/* Likes */}
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <ThumbsUp size={16} /> {review.likes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
