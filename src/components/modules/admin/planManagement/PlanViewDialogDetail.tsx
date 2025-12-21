"use client";

import InfoRow from "@/components/shared/InRow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { formatDateTime, getInitials } from "@/lib/formatters";
import { TravelPlan } from "@/types/travelPlan.interface";

import { Calendar, MapPin, Users } from "lucide-react";

interface IPlanViewDialogProps {
  open: boolean;
  onClose: () => void;
  plan: TravelPlan | null;
}

const PlanViewDialogDetail = ({ open, onClose, plan }: IPlanViewDialogProps) => {
  if (!plan) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Travel Plan Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg mb-6">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage src={plan?.host?.profileImage || ""} alt={plan?.host?.fullName} />
              <AvatarFallback className="text-2xl">{getInitials(plan?.host?.fullName as string)}</AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">{plan?.host?.fullName}</h2>
              <p className="text-muted-foreground mb-2 flex items-center justify-center sm:justify-start gap-2">
                {plan?.host?.email}
              </p>
            </div>
          </div>

          {/* PLAN INFORMATION */}
          <div className="space-y-6">
            {/* Plan Basic Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-lg">Plan Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow label="Title" value={plan.title} />
                <InfoRow label="Travel Type" value={plan.travelType as string} />
                <InfoRow label="Destination" value={plan.destination} />
                <InfoRow label="Budget" value={plan.budget} />
                <InfoRow label="Description" value={plan.description} />
                <InfoRow label="Age Limit" value={plan.ageLimit as number} />
                <InfoRow label="Members" value={plan.members as number} />
                <InfoRow label="Stay" value={plan.stay as string} />
                <InfoRow label="Accommodation Type" value={plan.accommodationType as string} />
                <InfoRow label="Transport Type" value={plan.transportType as string} />
                <InfoRow label="Meal Plan" value={plan.mealPlan as string} />
                <InfoRow label="Required Documents" value={plan.requiredDocuments as string} />
                <InfoRow label="Included" value={plan.included as string} />
                <InfoRow label="Excluded" value={plan.excluded as string} />
                <InfoRow label="Meeting Point" value={plan.meetingPoint as string} />
                <InfoRow label="Emergency Contact" value={plan.emergencyContact as string} />
                <InfoRow label="Plan Status" value={plan.planStatus} />
                <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                <InfoRow label="Start Date" value={formatDateTime(plan.startDate)} />
                <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                <InfoRow label="End Date" value={formatDateTime(plan.endDate)} />
                <Users className="h-4 w-4 mt-1 text-muted-foreground" />
                <InfoRow label="Participants" value={plan.participants?.length || 0} />
              </div>
            </div>

            <Separator />

            {/* Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                <InfoRow label="Created At" value={formatDateTime(plan.createdAt)} />
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                <InfoRow label="Last Updated" value={formatDateTime(plan.updatedAt)} />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlanViewDialogDetail;
