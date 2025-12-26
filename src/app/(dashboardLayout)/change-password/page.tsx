"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { updatePassword } from "@/services/auth/changePassword";

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await updatePassword(oldPassword, newPassword);
      if (res.success) {
        toast.success("password updated successfully!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Change Password
        </h2>

        <form onSubmit={handleChangePassword} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Old Password
            </label>
            <input
              type="password"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-3 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Enter old password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              New Password
            </label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Enter new password"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg"
          >
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
