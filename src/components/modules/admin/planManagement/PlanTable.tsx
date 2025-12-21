"use client";

import ManagementTable from "@/components/shared/ManagementTable"

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { PlanColumns } from "./PlanColumns";
import { TravelPlan } from "@/types/travelPlan.interface";
import PlanViewDialogDetail from "./PlanViewDialogDetail";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import { getDeletePlan } from "@/services/admin/allPlan";

 

interface PlanTableProps {
  plans: TravelPlan[];
}

const PlanTable = ({ plans }: PlanTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingPlan, setDeletingPlan] = useState<TravelPlan | null>(null);
  const [viewingPlan, setViewingPlan] = useState<TravelPlan | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (plan: TravelPlan) => {
    setViewingPlan(plan);
  };

  const handleDelete = (plan: TravelPlan) => {
    setDeletingPlan(plan);
  };

  const confirmDelete = async () => {
    if (!deletingPlan) return;

    setIsDeleting(true);

    const result = await getDeletePlan(deletingPlan.id); 

    setIsDeleting(false);

    if (result?.success) {
      toast.success(result.message || "Plan deleted successfully");
      setDeletingPlan(null);
      handleRefresh();
    } else {
      toast.error(result?.message || "Failed to delete plan");
    }
  };

  return (
    <>
      <ManagementTable
        data={plans}
        columns={PlanColumns}
        onView={handleView}
        onDelete={handleDelete}
        getRowKey={(plan) => plan.id!}
        emptyMessage="No travel plans found"
      />

      {/* View Plan Detail Dialog */}
      <PlanViewDialogDetail
        open={!!viewingPlan}
        onClose={() => setViewingPlan(null)}
        plan={viewingPlan}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingPlan}
        onOpenChange={(open) => !open && setDeletingPlan(null)}
        onConfirm={confirmDelete}
        title="Delete Travel Plan"
        description={`Are you sure you want to delete the travel plan to ${deletingPlan?.destination}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default PlanTable;
