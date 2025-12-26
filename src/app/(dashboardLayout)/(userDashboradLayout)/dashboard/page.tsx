import NotificationClient from "@/components/shared/NotificationClient";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getMyFriends } from "@/services/connection/sendRequest";
import { getNotifications } from "@/services/notification/notification";
import { getReviews } from "@/services/review/review";
import {} from "@/services/travel/travelPlan";
import { getMyPlans } from "@/services/user/myPlan";

import { Map, Users, Star, Bell, Pencil, Plus } from "lucide-react";
import Link from "next/link";

const UserDashboardPage = async () => {
  const loginUser = await getUserInfo();
  const userId = loginUser.id;
  const totalPlan = await getMyPlans(userId);
  const totalFriends = await getMyFriends();
  const totalReviews = await getReviews(userId);
  const notifications = await getNotifications();
  return (
    <div className="min-h-screen px-6 py-10">
      <div>
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back{" "}
              <span className="text-yellow-500">{loginUser?.fullName}</span>👋
            </h1>
            <p className="text-gray-500 mt-1">
              Here’s a quick overview of your activity
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#eafffaf5] p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
          

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-400/15 mb-4">
              <Map className="text-yellow-400" size={26} />
            </div>

            <p className="text-sm text-gray-500">Total Plans</p>
            <h3 className="text-4xl font-bold text-gray-900 mt-1">
              {totalPlan?.data?.length}
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-[#faf9ef] p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
         

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-400/15 mb-4">
              <Users className="text-yellow-400" size={26} />
            </div>

            <p className="text-sm text-gray-500">Friends</p>
            <h3 className="text-4xl font-bold text-gray-900 mt-1">
              {totalFriends?.data?.length}
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-[#f1fff6fa] p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
           

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-400/15 mb-4">
              <Star className="text-yellow-400" size={26} />
            </div>

            <p className="text-sm text-gray-500">Reviews</p>
            <h3 className="text-4xl font-bold text-gray-900 mt-1">
              {totalReviews?.data?.length}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Star className="text-yellow-400" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Top Review
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                “Wow, this guy is awesome! Had an amazing travel experience and
                would definitely recommend.”
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href={`/my-profile`}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition"
              >
                <Pencil size={18} /> Update Profile
              </Link>

              <Link
                href={`/dashboard/my-plan`}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-black font-medium transition"
              >
                <Plus size={18} /> Create Plan
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="text-yellow-400" />
              <h2 className="text-xl font-semibold text-gray-900">
                Notifications
              </h2>
            </div>

            <NotificationClient notifications={notifications.data || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
