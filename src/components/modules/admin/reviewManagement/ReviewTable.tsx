"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { ReviewColumns } from "./ReviewColumns";
import { AdminDeleteReview } from "@/services/admin/allReview";
import { Review } from "@/types/review.interface";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";

interface MyReviewTableProps {
  reviews: Review[];
}

const ReviewTable = ({ reviews,}: MyReviewTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingReview, setDeletingReview] = useState<Review | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleDelete = (review: Review) => {
    setDeletingReview(review);
  };

  const confirmDelete = async () => {
    if (!deletingReview?.id) return;

    setIsDeleting(true);
    const result = await AdminDeleteReview(deletingReview.id);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Review deleted successfully");
      setDeletingReview(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete review");
    }
  };

  return (
    <>
      <ManagementTable
        data={reviews}
        columns={ReviewColumns}
        onDelete={handleDelete}
        getRowKey={(review) => review.id!}
        emptyMessage="No reviews found"
      />

      <DeleteConfirmationDialog
        open={!!deletingReview}
        onOpenChange={(open) => !open && setDeletingReview(null)}
        onConfirm={confirmDelete}
        title="Delete Review"
        description={`Are you sure you want to delete this review by "${deletingReview?.reviewer?.fullName}"?`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default ReviewTable;
