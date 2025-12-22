"use client";


import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import MyPlanFormDialog from "./MyPlanDialogForm";
import { MyPlanColumns } from "./MyPlanColumns";
import { TravelPlan } from "@/types/travelPlan.interface";
import { deletePlan } from "@/services/user/myPlan";
import MyPlanViewDetailDialog from "./MyPlanViewDetailDialog";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";



interface MyPlanTableProps {
  plans: TravelPlan[];
}

const MyPlanTable = ({ plans }: MyPlanTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingPlan, setDeletingPlan] = useState<TravelPlan | null>(null);
  const [viewingPlan, setViewingPlan] = useState<TravelPlan | null>(null);
  const [editingPlan, setEditingPlan] = useState<TravelPlan | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (plan: TravelPlan) => {
    setViewingPlan(plan);
  };

  const handleEdit = (plan: TravelPlan) => {
    setEditingPlan(plan);
  };

  const handleDelete = (plan: TravelPlan) => {
    setDeletingPlan(plan);
  };

  const confirmDelete = async () => {
    if (!deletingPlan?.id) return;

    setIsDeleting(true);
    const result = await deletePlan(deletingPlan.id);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Plan deleted successfully");
      setDeletingPlan(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete plan");
    }
  };

  return (
    <>
      <ManagementTable
        data={plans}
        columns={MyPlanColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(plan) => plan.id!}
        emptyMessage="No travel plans found"
      />


      <MyPlanFormDialog
        open={!!editingPlan}
        onClose={() => setEditingPlan(null)}
        travelPlan={editingPlan}
        onSuccess={() => {
          setEditingPlan(null);
          handleRefresh();
        }}
      />

     
      <MyPlanViewDetailDialog
        open={!!viewingPlan}
        onClose={() => setViewingPlan(null)}
        travelPlan={viewingPlan}
      />

    
      <DeleteConfirmationDialog
        open={!!deletingPlan}
        onOpenChange={(open) => !open && setDeletingPlan(null)}
        onConfirm={confirmDelete}
        title="Delete Travel Plan"
        description={`Are you sure you want to delete "${deletingPlan?.title}"? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default MyPlanTable;
