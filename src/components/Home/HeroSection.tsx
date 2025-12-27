import { BadgeCheck, Lock } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-background">
      <div className="absolute -top-52 left-1/4 w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle,rgba(245,196,0,0.35)_0%,rgba(245,196,0,0.18)_28%,rgba(245,196,0,0.08)_45%,transparent_70%)] blur-2xl" />
      <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(245,196,0,0.25)_0%,rgba(245,196,0,0.12)_35%,transparent_65%)] blur-xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="max-w-[560px]">
          <span className="inline-block mb-5 px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full bg-yellow-100 text-yellow-700">
            TRAVEL TOGETHER · SAFER · SMARTER
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.05] text-[#0F0F0F] dark:text-accent-foreground">
            Your Journey <br />
            Starts With the <br />
            <span className="relative inline-block text-[#F5C400]">
              Right Buddy
              <span className="absolute -inset-2 rounded-full bg-yellow-400/30 blur-xl -z-10" />
            </span>
          </h1>

          <p className="mt-7 text-[#5F5F5F] dark:text-accent-foreground text-lg">
            Match with trusted travelers heading the same way. Split costs, stay
            safe, and turn trips into stories worth remembering.
          </p>

          <div className="mt-12 flex items-center gap-8">
            <Link
              href="/find-buddy"
              className="relative inline-flex items-center justify-center w-[240px] h-[56px] rounded-full font-semibold text-black bg-[#F5C400] hover:bg-[#E6B800] transition hover:scale-[1.06] shadow-xl shadow-yellow-400/40"
            >
              Find a Travel Buddy
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(245,196,0,0.65)_0%,transparent_65%)] blur-xl -z-10" />
            </Link>

            <div className="flex items-center gap-8">
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-[#111] dark:text-accent-foreground">
                  10K+
                </span>
                <span className="text-sm text-[#6B6B6B]">Travelers</span>
              </div>

              <div className="w-px h-8 bg-gray-300 dark:bg-accent" />

              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-[#111] dark:text-accent-foreground">
                  120+
                </span>
                <span className="text-sm text-[#6B6B6B]">Countries</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 mt-10 text-sm text-[#6B6B6B]">
            <div className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-green-500" />
              <span className="dark:text-accent-foreground">
                Identity verified
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Lock size={18} className="text-green-500" />
              <span className="dark:text-accent-foreground">
                Encrypted payments
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[420px] h-[540px] rounded-[32px] overflow-hidden">
            <div className="absolute -inset-8 rounded-full border border-yellow-400/30 blur-sm" />
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(245,196,0,0.35),transparent_65%)]" />

            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
              alt="Travel buddies"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -left-12 bottom-24 w-[180px] h-[180px] rounded-full border border-yellow-400/40 blur-sm" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
