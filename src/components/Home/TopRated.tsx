import { Star, MapPin, BadgeCheck } from "lucide-react";

const travelers = [
  {
    name: "Sarah",
    age: 24,
    rating: 4.9,
    location: "London, UK",
    tags: ["Adventure", "Hiking"],
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    name: "Mike",
    age: 29,
    rating: 5.0,
    location: "NYC, USA",
    tags: ["Foodie", "Nightlife"],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Elena",
    age: 26,
    rating: 4.8,
    location: "Bali, Indonesia",
    tags: ["Surfing", "Yoga"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    name: "Imran",
    age: 26,
    rating: 4.8,
    location: "Bali, Indonesia",
    tags: ["Surfing", "Yoga"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

const TopRated = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-[#111111]">
            Meet Our Top Rated Travelers
          </h2>
          <button className="text-sm font-medium text-gray-600 hover:text-black flex items-center gap-1">
            View all →
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelers.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-4 shadow-sm border"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-64 object-cover"
                />

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  {t.rating}
                </div>
              </div>

              {/* Info */}
              <div className="mt-4">
                <div className="flex items-center gap-1 font-semibold text-[#111111]">
                  {t.name}, {t.age}
                  <BadgeCheck size={16} className="text-blue-500" />
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <MapPin size={14} />
                  {t.location}
                </div>

                {/* Tags */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {t.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 py-2 rounded-full border text-sm font-medium bg-[#F5C400] hover:bg-[#E6B800] transition">
                    Connect
                  </button>
                  <button className="flex-1 py-2 rounded-full border text-sm font-medium hover:bg-gray-100 transition">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopRated;
