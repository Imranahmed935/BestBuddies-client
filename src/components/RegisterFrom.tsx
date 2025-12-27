"use client";

import { Mail, Lock, User, Eye } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { registerUser } from "@/services/auth/registerUser";
import InputFieldError from "./shared/InputFieldError";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [state, action, isPending] = useActionState(registerUser, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Account created successfully!");
    }
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex relative">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop"
          alt="Group of travelers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm p-8 rounded-2xl text-white max-w-md">
          <h2 className="text-4xl font-bold mb-4">
            Start your journey <br /> with us today.
          </h2>
          <p className="text-sm text-gray-200">
            Create an account and connect with travelers worldwide.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <p className="inline-block text-xs uppercase bg-yellow-400 text-black px-3 py-1 rounded-full mb-3 font-semibold">
            Join the community
          </p>

          <h2 className="text-3xl font-bold mb-2">Start your journey today</h2>
          <p className="text-gray-500 text-sm mb-8">
            Sign up to begin your adventure.
          </p>

          <form action={action}>
            <FieldGroup className="space-y-5">
              <Field>
                <FieldLabel>Full Name</FieldLabel>
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                  <User className="w-4 h-4 text-gray-400 mr-3" />
                  <Input
                    name="fullName"
                
                    placeholder="John Doe"
                    className="border-0 bg-transparent focus-visible:ring-0"
                  />
                  
                </div>
                <InputFieldError field="fullName" state={state} />
              </Field>

              <Field>
                <FieldLabel>Email</FieldLabel>
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                  <Mail className="w-4 h-4 text-gray-400 mr-3" />
                  <Input
                    name="email"
                    type="email"
                    
                    placeholder="traveler@example.com"
                    className="border-0 bg-transparent focus-visible:ring-0"
                  />
                 
                </div>
                 <InputFieldError field="email" state={state} />
              </Field>

           
              <Field>
                <FieldLabel>Password</FieldLabel>
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                  <Lock className="w-4 h-4 text-gray-400 mr-3" />
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="border-0 bg-transparent focus-visible:ring-0"
                  />
                  
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Eye className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <InputFieldError field="password" state={state} />
              </Field>

              
              <Field>
                <FieldLabel>Confirm Password</FieldLabel>
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                  <Lock className="w-4 h-4 text-gray-400 mr-3" />
                  <Input
                    name="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="border-0 bg-transparent focus-visible:ring-0"
                  />
                  
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    <Eye className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <InputFieldError field="confirmPassword" state={state} />
              </Field>
            </FieldGroup>

            <Button
              disabled={isPending}
              className="w-full mt-6 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
            >
              {isPending ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
