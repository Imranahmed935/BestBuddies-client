import { FindBuddyPageClient } from "@/components/shared/FindBuddyPageClient";
import { getAllPlan } from "@/services/travel/travelPlan";

const FindBuddyPage = async () => {
  const travelPlans = await getAllPlan();

  return <FindBuddyPageClient plans={travelPlans?.data || []} />;
};

export default FindBuddyPage;