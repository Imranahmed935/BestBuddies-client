/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fatch";
import { zodValidator } from "@/lib/zodValidator";
import { loginUser } from "./loginUser";
import { userValidationSchema } from "@/zod/auth.validation";

export const registerUser = async (_currentState: any, formData: any) => {
  try {
    const payload = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    const validation = zodValidator(payload, userValidationSchema);

    if (!validation.success) return validation;

    const validatedPayload = validation.data;

    const res = await serverFetch.post("/user/register", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedPayload),
    });
    const result = await res.json();
    if (result.success) {
      await loginUser(_currentState, formData);
    }

    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    return {
      success: false,
      message: error.message || "Registration Failed. Please try again.",
    };
  }
};
