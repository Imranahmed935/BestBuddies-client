import { Mail, Lock, User, Eye } from "lucide-react";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex relative">
  <img
    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop"
    alt="Group of travelers"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/20" />

  {/* Text on top-right */}
  <div className="absolute top-8 right-8 z-10 bg-black/50 backdrop-blur-sm p-8 rounded-2xl text-white max-w-md">
    <h2 className="text-4xl font-bold leading-tight mb-4">
      Start your journey <br /> with us today.
    </h2>
    <p className="text-sm text-gray-200">
      Create an account and connect with travelers worldwide.
    </p>
  </div>
</div>


      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <p className="inline-block text-xs uppercase tracking-widest bg-yellow-400 text-black px-3 py-1 rounded-full mb-3 font-semibold">
            Join the community
          </p>

          <h2 className="text-3xl font-bold mb-2">Start your journey today</h2>

          <p className="text-gray-500 text-sm mb-8">
            Sign up to begin your adventure.
          </p>
          <label className="text-sm font-medium">Full Name</label>
          <div className="flex items-center mt-2 mb-4 bg-gray-100 rounded-full px-4 py-3 focus-within:ring-2 focus-within:ring-[#F5C400]">
            <User className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="John Doe"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <label className="text-sm font-medium">Email</label>
          <div className="flex items-center mt-2 mb-4 bg-gray-100 rounded-full px-4 py-3 focus-within:ring-2 focus-within:ring-[#F5C400]">
            <Mail className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="email"
              placeholder="traveler@example.com"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <label className="text-sm font-medium">Password</label>
          <div className="flex items-center mt-2 mb-4 bg-gray-100 rounded-full px-4 py-3 focus-within:ring-2 focus-within:ring-[#F5C400]">
            <Lock className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Create a password"
              className="bg-transparent outline-none w-full text-sm"
            />
            <Eye className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>

          <label className="text-sm font-medium">Confirm Password</label>
          <div className="flex items-center mt-2 mb-6 bg-gray-100 rounded-full px-4 py-3 focus-within:ring-2 focus-within:ring-[#F5C400]">
            <Lock className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Confirm your password"
              className="bg-transparent outline-none w-full text-sm"
            />
            <Eye className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
          <button className="w-full py-3 rounded-full bg-[#F5C400] hover:bg-[#E6B800] transition font-semibold shadow-md">
            Create Account
          </button>

          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="px-4 text-xs text-gray-400">OR SIGN UP WITH</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 font-medium cursor-pointer hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
