/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { serverFetch } from "@/lib/server-fatch";


export async function getMyPlans(id: string) {
    try {
        const response = await serverFetch.get(`/travel-plan/my-plan/${id}`);
        const result = await response.json();
        return {
            success: result.success,
            data: Array.isArray(result.data) ? result.data : [],
            meta: result.meta,
        };
        
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            data: [],
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}


export async function createTravelPlan(
  _prevState: any,
  formData: FormData
) {
  const file = formData.get("file") as File | null;
  const payload = {
    title: formData.get("title") as string,
    destination: formData.get("destination") as string,
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string,
    budget: Number(formData.get("budget")),
    travelType: formData.get("travelType") as string,
    description: formData.get("description") as string,
    ageLimit: formData.get("ageLimit")
      ? Number(formData.get("ageLimit"))
      : null,

    members: formData.get("members")
      ? Number(formData.get("members"))
      : null,

    stay: formData.get("stay") as string | null,
    accommodationType: formData.get("accommodationType") as string | null,
    transportType: formData.get("transportType") as string | null,
    mealPlan: formData.get("mealPlan") as string | null,

    requiredDocuments: formData.get("requiredDocuments") as string | null,
    included: formData.get("included") as string | null,
    excluded: formData.get("excluded") as string | null,

    meetingPoint: formData.get("meetingPoint") as string | null,
    emergencyContact: formData.get("emergencyContact") as string | null,

    planStatus:formData.get("planStatus") as string | null, 
  };
  const uploadFormData = new FormData();
  uploadFormData.append("data", JSON.stringify(payload));
  if (file) uploadFormData.append("file", file);
  try {
    const response = await serverFetch.post("/travel-plan/create", {
      body:uploadFormData,
    });
    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to create travel plan",
      formData: payload,
    };
  }
}


export async function updateMyPlan(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const file = formData.get("file") as File | null;
  console.log(file)
  const payload = {
    title: formData.get("title") as string,
    destination: formData.get("destination") as string,
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string,
    budget: Number(formData.get("budget")),
    travelType: formData.get("travelType") as string,
    description: formData.get("description") as string,
    ageLimit: formData.get("ageLimit")
      ? Number(formData.get("ageLimit"))
      : null,

    members: formData.get("members")
      ? Number(formData.get("members"))
      : null,

    stay: formData.get("stay") as string | null,
    accommodationType: formData.get("accommodationType") as string | null,
    transportType: formData.get("transportType") as string | null,
    mealPlan: formData.get("mealPlan") as string | null,

    requiredDocuments: formData.get("requiredDocuments") as string | null,
    included: formData.get("included") as string | null,
    excluded: formData.get("excluded") as string | null,

    meetingPoint: formData.get("meetingPoint") as string | null,
    emergencyContact: formData.get("emergencyContact") as string | null,

    planStatus:formData.get("planStatus") as string | null, 
  };
  const uploadFormData = new FormData();
  uploadFormData.append("data", JSON.stringify(payload));
  if (file) uploadFormData.append("file", file);

  try {
    const response = await serverFetch.patch(`/travel-plan/${id}`, {
      body:uploadFormData,
    });

    const result = await response.json();
    console.log(result)
    return result;

  } catch (error: any) {
    console.error("Update travel plan error:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to update travel plan",
      formData: uploadFormData,
    };
  }
}

export async function deletePlan(id: string) {
    try {
        const response = await serverFetch.delete(`/travel-plan/${id}`)
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}



