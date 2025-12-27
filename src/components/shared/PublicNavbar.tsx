import Link from "next/link";

import LogoutButton from "./LogOutButton";
import { getCookie } from "@/services/auth/tokenHandlers";
import { getUserInfo } from "@/services/auth/getUserInfo";
import NavLinks from "./Navlinks";
import MobileMenu from "./MobileMenu";
import Logo from "./LogoPage";
import { ModeToggle } from "../mode-toggler";




const PublicNavbar = async () => {
  const accessToken = await getCookie("accessToken");
  let userRole: string | null = null;

  if (accessToken) {
    const userInfo = await getUserInfo();
    userRole = userInfo?.role || null;
  }
  const dashboardHref = userRole === "ADMIN" ? "/admin/dashboard" : "/dashboard";

  return (
    <nav className="w-full sticky top-0 z-50 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks accessToken={!!accessToken} dashboardHref={dashboardHref} />
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
               <ModeToggle/>
              {accessToken ? (
                <LogoutButton />
              ) : (
                <>
                  <Link href="/login" className="text-sm font-semibold px-4 py-2 dark:text-white">Login</Link>
                  <Link href="/register" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-2 rounded-full transition">
                    Join Now
                  </Link>
                </>
              )}
            </div>

            <MobileMenu 
                accessToken={!!accessToken} 
                dashboardHref={dashboardHref}
                logoutButton={accessToken ? <LogoutButton /> : null}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;