import Link from "next/link";
import LogoPage from "./LogoPage";

const PublicNavbar = () => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LogoPage />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/explore-travelers" className="hover:text-black">
            Explorer
          </Link>
          <Link href="/destinations" className="hover:text-black">
            Destinations
          </Link>
          <Link href="/about-us" className="hover:text-black">
            About Us
          </Link>
          <Link href="/contact-us" className="hover:text-black">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="border border-yellow-400 text-black hover:bg-yellow-400 hover:text-black font-semibold text-sm px-5 py-2 rounded-full transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-2 rounded-full transition"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
