
import NotificationClient from "@/components/shared/NotificationClient";
import { getNotifications } from "@/services/notification/notification";
;

const NotificationPage = async () => {
  const notifications = await getNotifications();

  return <NotificationClient notifications={notifications.data || []} />;
};

export default NotificationPage;
