/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fatch";

export async function getNotifications() {
  try {
    const response = await serverFetch.get(`/notification`);
    const result = await response.json();
    return {
      success: result.success,
      data: result.data || [],
      message: result.message,
    };
  } catch (error: any) {
    return {
      success: false,
      data: [],
      message: error.message,
    };
  }
}