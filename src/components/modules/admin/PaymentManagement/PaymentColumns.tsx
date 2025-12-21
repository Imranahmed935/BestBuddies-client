"use client";

import { UserInfoCell } from "@/components/shared/cell/UserInfoCell";
import { Column } from "@/components/shared/ManagementTable";
import { Payment } from "@/types/payment.interface";

export const PaymentColumns: Column<Payment>[] = [
  {
    header: "User",
    accessor: (payment) => (
      <UserInfoCell
        name={payment.user?.fullName || "N/A"}
        email={payment.user?.email || "N/A"}
        photo={payment.user?.profileImage}
      />
    ),
  },

  {
    header: "Amount",
    accessor: (payment) => (
      <span className="font-semibold">${payment.amount}</span>
    ),
  },

  {
    header: "Gateway",
    accessor: (payment) => (
      <span className="px-2 py-1 rounded bg-gray-100 text-sm">
        {payment.paymentGateway}
      </span>
    ),
  },

  {
    header: "Plan",
    accessor: (payment) => (
      <span className="capitalize">{payment.paymentType}</span>
    ),
  },

  {
    header: "Status",
    accessor: (payment) => {
      const bgColor =
        payment.status === "PAID" ? "bg-green-500" : "bg-red-500";

      return (
        <div
          className={`text-white text-sm px-2 py-1 rounded-full text-center inline-block ${bgColor}`}
        >
          {payment.status}
        </div>
      );
    },
  },

  {
    header: "Date",
    accessor: (payment) => (
      <span className="text-sm text-gray-600">
        {new Date(payment.createdAt).toLocaleDateString()}
      </span>
    ),
  },
];
