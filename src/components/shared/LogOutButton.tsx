"use client";

import { userLogout } from "@/services/auth/userLogout";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const handleLogout = async () => {
    await userLogout();
  };
  return (
    <Button variant={"destructive"} onClick={handleLogout} className="dark:bg-red-500">
      Logout
    </Button>
  );
};

export default LogoutButton;