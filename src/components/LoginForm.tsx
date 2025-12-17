
import { Mail, Lock, Eye } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image Section */}
      <div className="hidden md:flex items-center justify-center bg-gray-100 relative">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 bg-black/40 p-10 rounded-2xl text-white max-w-md">
          <h2 className="text-4xl font-bold mb-4">
            Connect with travelers <br /> around the globe.
          </h2>
          <p className="text-sm text-gray-200">
            Share your journey, find companions, and create unforgettable
            memories together.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-gray-500 mb-8">
            Log in to plan your next adventure.
          </p>

          {/* Email */}
          <label className="text-sm font-medium">Email or Username</label>
          <div className="flex items-center mt-2 mb-4 bg-gray-100 rounded-full px-4 py-3">
            <Mail className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="traveler@example.com"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Password */}
          <label className="text-sm font-medium">Password</label>
          <div className="flex items-center mt-2 mb-2 bg-gray-100 rounded-full px-4 py-3">
            <Lock className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-transparent outline-none w-full text-sm"
            />
            <Eye className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>

          <div className="text-right mb-6">
            <button className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 rounded-full bg-[#F5C400] hover:bg-[#E6B800] transition font-medium">
            Log In
          </button>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="px-4 text-xs text-gray-400">
              OR CONTINUE WITH
            </span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-4">
            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="w-5"
              />
            </button>

            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-5"
              />
            </button>

            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png"
                alt="X"
                className="w-5"
              />
            </button>
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Don’t have an account?{" "}
            <span className="text-blue-500 font-medium cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
