"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import PaymentViewDialogDetail from "./PaymentViewDialogDetail";
import { PaymentColumns } from "./PaymentColumns";

import { Payment } from "@/types/payment.interface";
import { deletePayment } from "@/services/admin/payment";

interface PaymentTableProps {
  payments: Payment[];
}

const PaymentTable = ({ payments }: PaymentTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingPayment, setDeletingPayment] = useState<Payment | null>(null);
  const [viewingPayment, setViewingPayment] = useState<Payment | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (payment: Payment) => {
    setViewingPayment(payment);
  };

  const handleDelete = (payment: Payment) => {
    setDeletingPayment(payment);
  };

  const confirmDelete = async () => {
    if (!deletingPayment) return;

    setIsDeleting(true);

    const result = await deletePayment(deletingPayment.id);

    setIsDeleting(false);

    if (result?.success) {
      toast.success(result.message || "Payment deleted successfully");
      setDeletingPayment(null);
      handleRefresh();
    } else {
      toast.error(result?.message || "Failed to delete payment");
    }
  };

  return (
    <>
      <ManagementTable
        data={payments}
        columns={PaymentColumns}
        onView={handleView}
        onDelete={handleDelete}
        getRowKey={(payment) => payment.id}
        emptyMessage="No payments found"
      />

      <PaymentViewDialogDetail
        open={!!viewingPayment}
        onClose={() => setViewingPayment(null)}
        payment={viewingPayment}
      />

      <DeleteConfirmationDialog
        open={!!deletingPayment}
        onOpenChange={(open) => !open && setDeletingPayment(null)}
        onConfirm={confirmDelete}
        title="Delete Payment"
        description={`Are you sure you want to delete this payment of $${deletingPayment?.amount}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default PaymentTable;
