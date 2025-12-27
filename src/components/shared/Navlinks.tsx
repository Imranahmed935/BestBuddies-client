"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ accessToken, dashboardHref }: { accessToken: boolean, dashboardHref: string }) => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Explorer", href: "/explore-travelers" },
    { name: "Find Buddy", href: "/find-buddy" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `px-1 pt-1 pb-1 text-sm font-medium transition-all border-b-2 ${
      isActive 
        ? "border-yellow-400 text-black dark:text-accent-foreground" 
        : "border-transparent text-gray-400"
    }`;
  };

  return (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
          {link.name}
        </Link>
      ))}
      {accessToken && (
        <Link href={dashboardHref} className={getLinkClass(dashboardHref)}>
          Dashboard
        </Link>
      )}
    </>
  );
};

export default NavLinks;