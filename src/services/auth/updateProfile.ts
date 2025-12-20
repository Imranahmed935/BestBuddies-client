"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fatch";

export const updateProfile = async (
  _currentState: string,
  formData: FormData
) => {
  const id = formData.get("id")?.toString();
  const file = formData.get("file") as File | null;


  const getValue = (key: string) => {
    const value = formData.get(key);
    return value && value !== "null" && value !== "" ? value : undefined;
  };

  const getStringArray = (key: string) => {
    const value = formData.get(key);
    if (typeof value === "string") return value.split(",").map((s) => s.trim());
    return [];
  };

  const rawData = {
    username: getValue("username"),
    fullName: getValue("fullName"),
    bio: getValue("bio"),
    age: getValue("age") ? Number(getValue("age")) : undefined,
    gender: getValue("gender"),
    currentLocation: getValue("currentLocation"),
    contactNumber: getValue("contactNumber"),
    travelInterests: getStringArray("travelInterests"),
    visitedCountries: getStringArray("visitedCountries"),
  }

 
  const uploadFormData = new FormData();
  uploadFormData.append("data", JSON.stringify(rawData));
  if (file) uploadFormData.append("file", file);
  try {
    const res = await serverFetch.patch(`/user/update/${id}`, {
      body: uploadFormData,
    });
     await res.json();
    
    return await res.json();
  } catch (error: any) {
    console.error("Update Profile Error:", error);
    return {
      success: false,
      message: "Profile update failed. Please try again.",
    };
  }
};
