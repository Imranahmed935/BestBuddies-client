"use client"
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getMyPlans } from "@/services/user/myPlan";
import { UserInfo } from "@/types/user.interface";
import { TravelPlan } from "@/types/travelPlan.interface";
import { Button } from "@/components/ui/button";
import MyPlanTable from "../modules/user/myPlanManagement/MyPlanTable";
import MyPlanViewDetailDialog from "../modules/user/myPlanManagement/MyPlanViewDetailDialog";
import MyPlanFormDialog from "../modules/user/myPlanManagement/MyPlanDialogForm";


const AllMyPlan = () => {
    const [user, setUser] = useState<UserInfo | null>(null);
  const [plans, setPlans] = useState<TravelPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<TravelPlan | undefined>();
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
   
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = await getUserInfo();
        setUser(u);

        const myPlans = await getMyPlans(u.id);
        setPlans(myPlans.data);
      } catch (error) {
        console.error("Failed to fetch travel plans:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewPlan = (plan: TravelPlan) => {
    setSelectedPlan(plan);
    setViewDialogOpen(true);
  };

  const handleEditPlan = (plan: TravelPlan) => {
    setSelectedPlan(plan);
    setFormDialogOpen(true);
  };

  const handleFormSuccess = async () => {
    if (!user) return;
    const updatedPlans = await getMyPlans(user.id);
    setPlans(updatedPlans.data);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Travel Plans</h1>
        <Button onClick={() => setFormDialogOpen(true)} className="bg-yellow-400 hover:bg-yellow-500 text-black">Create New Plan</Button>
      </div>

      {plans?.length === 0 ? (
        <p className="text-muted-foreground">You have no travel plans yet.</p>
      ) : (
       <MyPlanTable plans={plans}/>
      )}

      {/* View Dialog */}
      {selectedPlan && (
        <MyPlanViewDetailDialog
          open={viewDialogOpen}
          onClose={() => setViewDialogOpen(false)}
          travelPlan={selectedPlan} 
        />
      )}

      {/* Form Dialog */}
      <MyPlanFormDialog
        open={formDialogOpen}
        onClose={() => setFormDialogOpen(false)}
        onSuccess={handleFormSuccess}
        travelPlan={selectedPlan}
        hostId={user?.id}
      />
    </div>
  );
};

export default AllMyPlan;