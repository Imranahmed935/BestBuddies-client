/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fatch";
import { getCookie } from "../auth/tokenHandlers";

export async function sendJoinRequest(travelId: string) {
  try {
    const token = await getCookie("accessToken") || "";
    const response = await serverFetch.post("/join/send", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({travelId}),
      credentials: "include",
    });

    const result = await response.json();

    return {
      success: result.success,
      data: result.data || null,
      message: result.message,
    };
  } catch (error: any) {
    return {
      success: false,
      data: null,
      message: error.message,
    };
  }
}