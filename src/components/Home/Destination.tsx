import React from "react";

const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    buddies: "450+ Buddies",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    name: "Reykjavik",
    country: "Iceland",
    buddies: "120+ Buddies",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 3,
    name: "Kyoto",
    country: "Japan",
    buddies: "340+ Buddies",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
  },
];

const Destination = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">Popular Destinations</h2>
            <p className="text-gray-500 text-sm">
              Trending places our community is exploring right now.
            </p>
          </div>

          <button className="text-sm font-medium text-gray-700 hover:text-yellow-400 transition flex items-center gap-1">
            See all →
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="relative h-[420px] rounded-3xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Buddies badge */}
              <span className="absolute top-4 right-4 px-3 py-1 text-xs rounded-full bg-white/80 backdrop-blur text-gray-800">
                {item.buddies}
              </span>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-gray-200 mb-4 flex items-center gap-1">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                  {item.country}
                </p>

                <button className="w-full py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-yellow-400 hover:text-black transition">
                  Find Buddy in {item.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
