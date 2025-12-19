/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";


export const userValidationSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Valid email is required"),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });



export const loginValidationZodSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});
