import { MapPin } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-white">
        <MapPin size={18} />
      </div>
      <span className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
        Best<span className="text-yellow-400">Buddies</span>
      </span>
    </div>
  );
};

export default Logo;
