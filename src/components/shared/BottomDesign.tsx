import Link from "next/link";

const BottomDesign = () => {
  return (
    <div className="bg-yellow-400 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto mt-10">
   
      <div className="text-center md:text-left flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Ready to start your journey?
        </h2>
        <p className="text-black/80">
          Join over 50,000 travelers finding their perfect travel buddies every day. 
          Its free to get started!
        </p>
      </div>

   
      <div className="flex gap-4">
        <Link href={"/register"} className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
          Create Account
        </Link>
        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BottomDesign;
