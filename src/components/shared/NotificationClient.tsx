/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import NotificationCard from "@/components/shared/NotificationCard";
import { respondJoinRequest } from "@/services/join/join";

interface Props {
  notifications: any[];
}

const NotificationClient = ({ notifications }: Props) => {
  const handleAcceptTrip = async (
    joinRequestId: string,
    action: "ACCEPT" | "REJECT"
  ) => {
     await respondJoinRequest(joinRequestId, action )
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-3">
      {notifications.map((notify) => (
        <NotificationCard
          key={notify.id}
          cardValues={notify}
          handleAcceptTrip={handleAcceptTrip}
        />
      ))}
    </div>
  );
};

export default NotificationClient;
