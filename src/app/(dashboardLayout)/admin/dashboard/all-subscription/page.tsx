"use client";

import { Suspense, useEffect, useState } from "react";
import { TableSkeleton } from "@/components/shared/TableSkeleton";


import { Payment } from "@/types/payment.interface";
import { getAllPayments } from "@/services/admin/payment";
import PaymentTable from "@/components/modules/admin/PaymentManagement/PaymentTable";

const PaymentPage = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(payments)
 

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const result = await getAllPayments();
        setPayments(result || []);
      } catch (error) {
        console.error("Failed to fetch payments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payments Management</h1>
      </div>

      <Suspense fallback={<TableSkeleton columns={7} rows={10} />}>
        {loading ? (
          <TableSkeleton columns={7} rows={10} />
        ) : payments.length === 0 ? (
          <p className="text-muted-foreground">
            No payments found.
          </p>
        ) : (
          <PaymentTable payments={payments} />
        )}
      </Suspense>
    </div>
  );
};

export default PaymentPage;
