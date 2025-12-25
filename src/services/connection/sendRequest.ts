/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { serverFetch } from "@/lib/server-fatch";
import { getCookie } from "../auth/tokenHandlers";

interface SendConnectionPayload {
  receiverId: string;
}


export async function getMyFriends() {
  try {
    const response = await serverFetch.get("/connection/friends");
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


export async function respondConnection(
  connectionId: string,
  action: "ACCEPT" | "REJECT"
) {
  try {
    const token = getCookie("accessToken") || "";

    const response = await serverFetch.patch("/connection/respond", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        connectionId,
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

export async function sendConnection(payload: SendConnectionPayload) {
  try {
    
    const token = getCookie("accessToken") || "";
 

    const response = await serverFetch.post("/connection/send", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
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

export async function getPendingRequests() {
  try {
    const response = await serverFetch.get(`/connection/pending`);
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

