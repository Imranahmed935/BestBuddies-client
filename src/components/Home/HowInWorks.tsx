import React from "react";
import { Plane, Search, User } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-600">
          SIMPLE PROCESS
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Start your adventure in{" "}
          <span className="text-yellow-400">3 steps</span>
        </h2>

        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          Your journey to finding the perfect travel companion is easier than
          you think.
        </p>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gray-200" />

          {/* Step 1 */}
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-400 text-white shadow-md">
              <User />
            </div>
            <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-black text-white">
              STEP 1
            </span>
            <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
            <p className="text-gray-500 text-sm">
              Sign up and verify your identity. Add your interests, travel style,
              and languages to build trust.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-400 text-white shadow-md">
              <Search />
            </div>
            <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-black text-white">
              STEP 2
            </span>
            <h3 className="text-xl font-semibold mb-2">Find a Buddy</h3>
            <p className="text-gray-500 text-sm">
              Browse travelers heading to your destination. Use smart filters
              to find compatible matches.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-yellow-400 text-white shadow-md">
              <Plane />
            </div>
            <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-black text-white">
              STEP 3
            </span>
            <h3 className="text-xl font-semibold mb-2">Travel Together</h3>
            <p className="text-gray-500 text-sm">
              Connect, plan your itinerary, split costs securely, and enjoy an
              unforgettable journey.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-16">
          <button className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:border-yellow-400 hover:text-yellow-400 transition">
            Learn more about safety →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
