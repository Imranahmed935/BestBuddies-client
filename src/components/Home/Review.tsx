"use client";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import { getAllTestimonial } from "@/services/review/review";

interface Reviewer {
  fullName: string;
  profileImage?: string;
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  reviewer: Reviewer;
}

const Review = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await getAllTestimonial();
      setReviews(res || []);
    };
    fetchReviews();
  }, []);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-accent-foreground tracking-tight">
            Stories from the Road
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Real connections made by travelers just like you.
          </p>
        </div>

        <Marquee gradient={false} speed={35} pauseOnHover>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="mx-4 w-80 rounded-3xl bg-white/70 dark:bg-accent backdrop-blur-md border border-yellow-400 shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.reviewer?.profileImage || "/avatar.png"}
                  alt={review.reviewer?.fullName || "Reviewer"}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-accent-foreground leading-tight">
                    {review.reviewer?.fullName}
                  </h4>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">
                “{review.comment}”
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Review;
