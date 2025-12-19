import { NavSection } from "@/types/dashboard.interface";


export const exploreNavItems: NavSection[] = [
  {
    title: "Explore & Match",
    items: [
      {
        title: "explore Travelers",
        href: "/explore-travelers",
        icon: "Search",
        roles: ["USER", "ADMIN"],
      },
      {
        title: "find buddy",
        href: "/find-buddy",
        icon: "Users",
        roles: ["USER", "ADMIN"],
      },
    ],
  },
];
