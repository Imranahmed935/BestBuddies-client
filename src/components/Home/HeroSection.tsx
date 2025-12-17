
import { BadgeCheck, Lock, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#111111]">
            Don&apos;t Travel Alone. <br />
            <span className="text-[#F5C400]">Find Your Perfect</span> <br />
            <span className="text-[#F5C400]">Buddy.</span>
          </h1>

          <p className="mt-6 text-[#6B6B6B] max-w-lg">
            Connect with verified travelers, share costs, and make
            unforgettable memories worldwide.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-10 flex items-center bg-white rounded-full shadow-lg max-w-xl">
            <div className="pl-6 text-gray-400">
              <Search size={20} />
            </div>

            <input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 px-4 py-4 text-sm text-gray-700 focus:outline-none bg-transparent"
            />

            <button className="bg-[#F5C400] hover:bg-[#E6B800] text-black font-semibold px-6 py-3 rounded-full mr-2 transition">
              Find Buddy
            </button>
          </div>

          {/* BADGES */}
          <div className="flex items-center gap-6 mt-6 text-sm text-[#6B6B6B]">
  
  {/* Verified Profiles */}
  <div className="flex items-center gap-2">
    <BadgeCheck size={18} className="text-green-500" />
    <span>Verified profiles</span>
  </div>

  {/* Secure Payments */}
  <div className="flex items-center gap-2">
    <Lock size={18} className="text-green-500" />
    <span>Secure payments</span>
  </div>

</div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-[28px] overflow-hidden shadow-xl max-w-lg">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
              alt="Travel buddies"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
