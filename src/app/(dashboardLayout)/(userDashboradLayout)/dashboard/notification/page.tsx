/* eslint-disable @typescript-eslint/no-explicit-any */
import NotificationCard from "@/components/shared/NotificationCard";
import { getNotifications } from "@/services/notification/notification";

const NotificationPage = async () => {
  const notifications = await getNotifications();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
    
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Notifications
      </h1>
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {notifications.data.length > 0 ? (
          notifications.data.map((notify: any) => (
            <NotificationCard
              key={notify.id}
              cardValues={notify}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">
            You have no notifications yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
