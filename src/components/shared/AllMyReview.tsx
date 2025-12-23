"use client";

import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { UserInfo } from "@/types/user.interface";
import { getReviews } from "@/services/review/review";
import { Review, TReview } from "@/types/review.interface";
import MyReviewTable from "../modules/user/myReviewManagement/MyReviewTable";
import MyReviewDialogForm from "../modules/user/myReviewManagement/MyReviewDialogForm";

const AllMyReview = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [reviews, setReviews] = useState<TReview[]>([]);
  const [selectedReview, setSelectedReview] = useState<TReview | null>(null);
  const [formDialogOpen, setFormDialogOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = await getUserInfo();
        setUser(u);

        const myReviews = await getReviews(u.id);
        const normalizedReviews: TReview[] =
          (myReviews.data || []).map((r:Review) => ({
            id: r.id,
            rating: r.rating,
            comment: r.comment,
            reviewer: r.reviewer
              ? {
                  fullName: r.reviewer.fullName,
                  email: r.reviewer.email,
                  profileImage: r.reviewer.profileImage ?? undefined,
                }
              : { fullName: "Unknown", email: "unknown@example.com" },
            travelPlan: r.travelPlan
              ? { id: r.travelPlan.id, title: r.travelPlan.title }
              : { id: "", title: "" },
            createdAt: r.createdAt.toString(),
            updatedAt: r.updatedAt.toString(),
          }));

        setReviews(normalizedReviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditReview = (review: TReview) => {
    setSelectedReview(review);
    setFormDialogOpen(true);
  };

  const handleFormSuccess = async () => {
    if (!user) return;
    const updatedReviews = await getReviews(user.id);
    const normalizedReviews: TReview[] =
      (updatedReviews.data || []).map((r:Review) => ({
        id: r.id,
        rating: r.rating,
        comment: r.comment,
        reviewer: r.reviewer
          ? {
              fullName: r.reviewer.fullName,
              email: r.reviewer.email,
              profileImage: r.reviewer.profileImage ?? undefined,
            }
          : { fullName: "Unknown", email: "unknown@example.com" },
        travelPlan: r.travelPlan
          ? { id: r.travelPlan.id, title: r.travelPlan.title }
          : { id: "", title: "" },
        createdAt: r.createdAt.toString(),
        updatedAt: r.updatedAt.toString(),
      }));
    setReviews(normalizedReviews);
    setFormDialogOpen(false);
    setSelectedReview(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Reviews</h1>
      </div>

      {reviews.length === 0 ? (
        <p className="text-muted-foreground">
          You have not submitted any reviews yet.
        </p>
      ) : (
        <MyReviewTable reviews={reviews} onEdit={handleEditReview} />
      )}

      {formDialogOpen && (
        <MyReviewDialogForm
          open={formDialogOpen}
          onClose={() => setFormDialogOpen(false)}
          onSuccess={handleFormSuccess}
          review={selectedReview}
        />
      )}
    </div>
  );
};

export default AllMyReview;
