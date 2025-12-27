/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import NavLinks from "./Navlinks";
import Link from "next/link";


const MobileMenu = ({ accessToken, dashboardHref, logoutButton }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b shadow-lg flex flex-col p-6 gap-4 animate-in slide-in-from-top">
          <NavLinks accessToken={accessToken} dashboardHref={dashboardHref} />
          <hr />
          <div className="flex flex-col gap-3">
            {accessToken ? (
              logoutButton
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="bg-yellow-400 text-center py-2 rounded-full">Join Now</Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;