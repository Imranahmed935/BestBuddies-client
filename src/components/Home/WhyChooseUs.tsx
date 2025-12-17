import React from "react";
import { ShieldCheck, Globe, Wallet } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-600">
          WHY US
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-14">
          Why Travelers <span className="text-yellow-400">Choose Us</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-yellow-100 text-yellow-400">
              <ShieldCheck />
            </div>
            <h3 className="text-lg font-semibold mb-2">Safety First</h3>
            <p className="text-gray-500 text-sm">
              We prioritize your safety with rigorous profile verification and
              trusted community reviews.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-yellow-100 text-yellow-400">
              <Globe />
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Community</h3>
            <p className="text-gray-500 text-sm">
              Connect with like-minded travelers from over 100 countries around
              the world.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-yellow-100 text-yellow-400">
              <Wallet />
            </div>
            <h3 className="text-lg font-semibold mb-2">Shared Costs</h3>
            <p className="text-gray-500 text-sm">
              Save money on accommodation and transport by splitting expenses
              with your travel buddy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
