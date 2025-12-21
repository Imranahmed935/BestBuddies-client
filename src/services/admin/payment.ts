"use server";

import { serverFetch } from "@/lib/server-fatch";

export const getAllPayments = async () => {
  try {
    const res = await serverFetch.get(`/admin/payments`);

    if (!res.ok) {
      throw new Error("Failed to fetch payment");
    }

    const payments = await res.json();
    console.log(payments.data)
    return payments.data; 
  } catch (error) {
    console.error("Error fetching payments:", error);
    return null; 
  }
};


export const deletePayment = async (id: string) => {
  try {
    const res = await serverFetch.delete(`/admin/payment/${id}`);

    if (!res.ok) {
      throw new Error("Failed to delete user");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error deleting user:", error);
    return null;
  }
};






