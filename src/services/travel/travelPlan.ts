/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { serverFetch } from "@/lib/server-fatch";

export async function getAllPlan() {
    try {
    
        const response = await serverFetch.get(`/travel-plan`);
        const result = await response.json();
        return {
            success: result.success,
            data: Array.isArray(result.data) ? result.data : [],
            meta: result.meta,
        };
    } catch (error: any) {
        return {
            success: false,
            data: [],
            message: error.message,
        };
    }
}

export async function getTravelById(id: string) {
  try {
    const response = await serverFetch.get(`/travel-plan/${id}`);

    const result = await response.json();
    return {
      success: result.success,
      data: result.data || null,
    };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      data: null,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}