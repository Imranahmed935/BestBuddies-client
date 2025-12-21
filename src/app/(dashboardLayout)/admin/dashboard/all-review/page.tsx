"use client";

import { Suspense, useEffect, useState } from "react";
import { getAllReviews } from "@/services/admin/allReview";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { Review } from "@/types/review.interface";
import ReviewTable from "@/components/modules/admin/reviewManagement/ReviewTable";

const ReviewPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allReviews = await getAllReviews();
        setReviews(allReviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reviews Management</h1>
      </div>

      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        {reviews?.length === 0 ? (
          <p className="text-muted-foreground">
            You have not submitted any reviews yet.
          </p>
        ) : (
          <ReviewTable reviews={reviews} />
        )}
      </Suspense>
    </div>
  );
};

export default ReviewPage;
