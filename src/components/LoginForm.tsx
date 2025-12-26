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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, action, isPending] = useActionState(loginUser, null);

  // Demo autofill function
  const handleAutoFill = (role: "ADMIN" | "USER") => {
    if (role === "ADMIN") {
      setEmail("admin@gmail.com");
      setPassword("12345678");
    } else if (role === "USER") {
      setEmail("imam@gmail.com");
      setPassword("123456");
    }
    toast.info(`Auto-filled ${role} credentials`);
  };

  // Toast messages for login
  useEffect(() => {
    if (state && state.success) toast.success("Logged in successfully!");
    if (state && !state.success && state.message) toast.error(state.message);
  }, [state]);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image */}
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

      {/* Right Form */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-gray-500 mb-8">Log in to plan your next adventure.</p>

          <form action={action}>
            {redirect && <input type="hidden" name="redirect" value={redirect} />}

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="imran@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

          {/* Demo Credentials Card */}
          <div className="mt-6 space-y-3">
            <p className="font-semibold text-sm">Demo Credentials</p>

            <div className="flex justify-between items-center rounded-lg border p-3 text-sm">
              <div>
                <p className="font-medium">Admin</p>
                <p className="font-mono">admin@gmail.com</p>
                <p className="font-mono">12345678</p>
              </div>
              <Button type="button" variant="outline" onClick={() => handleAutoFill("ADMIN")}>
                Use
              </Button>
            </div>

            <div className="flex justify-between items-center rounded-lg border p-3 text-sm">
              <div>
                <p className="font-medium">User</p>
                <p className="font-mono">imam@gmail.com</p>
                <p className="font-mono">123456</p>
              </div>
              <Button type="button" variant="outline" onClick={() => handleAutoFill("USER")}>
                Use
              </Button>
            </div>
          </div>

          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="px-4 text-xs text-gray-400">OR CONTINUE WITH</span>
            <div className="flex-grow h-px bg-gray-200" />
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
