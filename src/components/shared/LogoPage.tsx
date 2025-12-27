import { MapPin } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-white">
        <MapPin size={18} />
      </div>
      <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
        Best<span className="text-yellow-400">Buddies</span>
      </div>
    </div>
  );
};

export default Logo;
