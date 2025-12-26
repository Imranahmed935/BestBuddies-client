/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
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

export async function respondJoinRequest(
  requestId: string,
  action: "ACCEPT" | "REJECT"
) {
  console.log("service",requestId, action)
  try {
    const token = getCookie("accessToken") || "";

    const response = await serverFetch.patch("/join/respond", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        requestId,
        action,
      }),
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

export async function getPendingTripRequests() {
  try {
    const response = await serverFetch.get(`/join/pending`);
    const result = await response.json();
    console.log(result)

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