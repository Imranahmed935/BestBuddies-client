import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { UserInfo } from "@/types/user.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";
import { NavSection } from "@/types/dashboard.interface";
import { getUserInfo } from "@/services/auth/getUserInfo";



const DashboardSidebar = async () => {
  const userInfo = (await getUserInfo()) as unknown as UserInfo;
 

  const navItems: NavSection[] = getNavItemsByRole(userInfo.role);
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return (
    <DashboardSidebarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
};

export default DashboardSidebar;