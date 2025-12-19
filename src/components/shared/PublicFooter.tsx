import { MapPin } from "lucide-react";

const PublicFooter = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-white">
                <MapPin size={18} />
              </div>
              <span className="lg:text-4xl text-2xl font-bold tracking-tight text-white">
                Best<span className="text-yellow-400">Buddies</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Find your perfect travel companion and explore the world together.
              Safe, fun, and unforgettable journeys start here.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-400 cursor-pointer">
                Destinations
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                How It Works
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Find Buddies
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">Pricing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-400 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Safety Guidelines
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to get travel tips and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} BestBuddies. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-yellow-400 cursor-pointer">
              Facebook
            </span>
            <span className="hover:text-yellow-400 cursor-pointer">
              Instagram
            </span>
            <span className="hover:text-yellow-400 cursor-pointer">
              Twitter
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
