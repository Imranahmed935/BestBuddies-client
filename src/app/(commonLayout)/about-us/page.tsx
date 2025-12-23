import React from "react";
import { Users, MapPin, ShieldCheck } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <section className="relative bg-yellow-400  py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Adventure is better <br />
            <span className="text-white drop-shadow-sm">together.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-800 max-w-3xl mx-auto font-medium">
            TravelBuddy connects explorers from around the world to travel
            safely, affordably, and with unforgettable company.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1539635278303-d4002c07dee3?auto=format&fit=crop&q=80&w=900"
              alt="Friends traveling"
              className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 px-6 py-4 rounded-2xl shadow-xl text-slate-900">
              <p className="font-bold text-xl">Since 2024</p>
              <p className="text-sm">Connecting Travelers</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Why BestBuddies?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Millions want to explore the world but not alone. TravelBuddy
              brings like-minded travelers together, creating meaningful
              journeys, shared memories, and trusted companionship.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-yellow-50 border border-yellow-200 text-center hover:shadow-md transition">
                <h4 className="text-2xl font-bold text-slate-900">10k+</h4>
                <p className="text-sm text-gray-500 mt-1">Global Buddies</p>
              </div>
              <div className="p-6 rounded-2xl bg-yellow-50 border border-yellow-200 text-center hover:shadow-md transition">
                <h4 className="text-2xl font-bold text-slate-900">50+</h4>
                <p className="text-sm text-gray-500 mt-1">Countries Explored</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              What we stand for
            </h2>
            <p className="text-slate-400 mt-3">
              Our core values shape every journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Safety First",
                text: "Verified profiles, trusted reviews, and secure travel planning."
              },
              {
                icon: Users,
                title: "Real Connections",
                text: "Travel with people who match your vibe, pace, and passion."
              },
              {
                icon: MapPin,
                title: "Local Experiences",
                text: "Explore destinations beyond tourist paths with shared insights."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-slate-700 hover:border-yellow-400 transition-all hover:-translate-y-1"
              >
                <div className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition">
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-t from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to find your next Travel Buddy?
          </h2>
          <p className="text-gray-600 mb-10">
            Join thousands of travelers discovering the world together.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105">
            Join the Community
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
