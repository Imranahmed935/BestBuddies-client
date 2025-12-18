/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useActionState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { loginUser } from "@/services/auth/loginUser";
import { toast } from "sonner"; 

const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, action, isPending] = useActionState(loginUser, null);
  useEffect(() => {

    if (state && state.success) {
      toast.success("Logged in successfully!");
    } 

    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex items-center justify-center relative">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 bg-black/40 p-10 rounded-2xl text-white max-w-md">
          <h2 className="text-4xl font-bold mb-4">
            Connect with travelers <br /> around the globe.
          </h2>
          <p className="text-sm text-gray-200">
            Share your journey, find companions, and create unforgettable memories together.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-gray-500 mb-8">Log in to plan your next adventure.</p>

          <form action={action}>
            {redirect && <input type="hidden" name="redirect" value={redirect} />}

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" name="email" type="email" placeholder="imran@example.com" />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-2 text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </Field>
            </FieldGroup>

            <Button
              type="submit"
              className="w-full py-3 mt-6 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
              disabled={isPending}
            >
              {isPending ? "Logging in..." : "Log In"}
            </Button>
          </form>

          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="px-4 text-xs text-gray-400">OR CONTINUE WITH</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-4">
            {[
              { src: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png", alt: "Google" },
              { src: "https://cdn-icons-png.flaticon.com/512/733/733547.png", alt: "Facebook" },
              { src: "https://cdn-icons-png.flaticon.com/512/5968/5968958.png", alt: "X" },
            ].map((social) => (
              <button
                key={social.alt}
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
              >
                <img src={social.src} alt={social.alt} className="w-5" />
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-500 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
