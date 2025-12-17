import React from "react";

const PublicNavbar = () => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="font-bold text-white">TB</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">
            BestBuddies
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-black">
            Destinations
          </a>
          <a href="#" className="hover:text-black">
            How it Works
          </a>
          <a href="#" className="hover:text-black">
            Login
          </a>
        </div>

        <div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-2 rounded-full transition">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
