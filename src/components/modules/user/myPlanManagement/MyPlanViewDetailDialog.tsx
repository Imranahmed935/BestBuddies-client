"use client";

import { useEffect, useState } from "react";
import InfoRow from "@/components/shared/InRow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { formatDateTime } from "@/lib/formatters";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { TravelPlan } from "@/types/travelPlan.interface";

import {
  Calendar,
  MapPin,
  Shield,
  FileText,
  User,
  Plane,
  Home,
  Utensils,
  Users,
} from "lucide-react";

interface MyPlanViewDialogProps {
  open: boolean;
  onClose: () => void;
  travelPlan: TravelPlan | null;
}

const MyPlanViewDetailDialog = ({
  open,
  onClose,
  travelPlan,
}: MyPlanViewDialogProps) => {
  const [hostInfo, setHostInfo] = useState<{
    fullName: string;
    email: string;
    profileImage?: string;
  } | null>(null);

  useEffect(() => {
    getUserInfo().then(setHostInfo).catch(console.error);
  }, []);

  if (!travelPlan) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-xl font-bold text-yellow-500">
            Travel Plan Details
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-8">
          {/* Header */}
          <div className="p-6 rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
            <h2 className="text-3xl font-bold mb-2">{travelPlan.title}</h2>

            <p className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-yellow-500" />
              {travelPlan.destination}
            </p>

            <div className="mt-3 flex gap-2 flex-wrap">
              <Badge className="bg-yellow-400 text-black">
                {travelPlan.planStatus}
              </Badge>
              <Badge variant="outline">
                <Shield className="h-3 w-3 mr-1" />
                {travelPlan.travelType}
              </Badge>
            </div>
          </div>

          {/* Plan Information */}
          <Section title="Plan Information" icon={<FileText />}>
            <Grid>
              <InfoRow label="Description" value={travelPlan.description} />
              <InfoRow label="Budget" value={`$${travelPlan.budget}`} />
              <InfoRow label="Members" value={travelPlan.members ?? "N/A"} />
              <InfoRow label="Age Limit" value={travelPlan.ageLimit ?? "N/A"} />
            </Grid>
          </Section>

          {/* Dates */}
          <Section title="Schedule" icon={<Calendar />}>
            <Grid>
              <InfoRow
                label="Start Date"
                value={formatDateTime(travelPlan.startDate)}
              />
              <InfoRow
                label="End Date"
                value={formatDateTime(travelPlan.endDate)}
              />
            </Grid>
          </Section>

          {/* Travel & Stay */}
          <Section title="Travel & Stay" icon={<Plane />}>
            <Grid>
              <InfoRow label="Travel Type" value={travelPlan.travelType as string} />
              <InfoRow label="Transport" value={travelPlan.transportType as string} />
              <InfoRow label="Stay" value={travelPlan.stay as string} />
              <InfoRow
                label="Accommodation"
                value={travelPlan.accommodationType as string}
              />
              <InfoRow label="Meal Plan" value={travelPlan.mealPlan as string} />
            </Grid>
          </Section>

          {/* Documents */}
          <Section title="Documents & Inclusions" icon={<FileText />}>
            <Grid>
              <InfoRow
                label="Required Documents"
                value={travelPlan.requiredDocuments as string}
              />
              <InfoRow label="Included" value={travelPlan?.included as string} />
              <InfoRow label="Excluded" value={travelPlan?.excluded as string} />
            </Grid>
          </Section>

          {/* Meeting */}
          <Section title="Meeting & Emergency" icon={<Users />}>
            <Grid>
              <InfoRow
                label="Meeting Point"
                value={travelPlan.meetingPoint as string}
              />
              <InfoRow
                label="Emergency Contact"
                value={travelPlan.emergencyContact as string}
              />
            </Grid>
          </Section>

          {/* Meta */}
          <Section title="Meta Information" icon={<Calendar />}>
            <Grid>
              <InfoRow
                label="Created At"
                value={formatDateTime(travelPlan.createdAt)}
              />
              <InfoRow
                label="Updated At"
                value={formatDateTime(travelPlan.updatedAt)}
              />
            </Grid>
          </Section>

          {/* Host */}
          <Section title="Host Information" icon={<User />}>
            {hostInfo ? (
              <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-lg">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={hostInfo.profileImage || ""} />
                  <AvatarFallback className="bg-yellow-400 text-black">
                    {hostInfo.fullName[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{hostInfo.fullName}</p>
                  <p className="text-sm text-muted-foreground">
                    {hostInfo.email}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Loading host...</p>
            )}
          </Section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MyPlanViewDetailDialog;

/* ---------- Helpers ---------- */

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div>
    <div className="flex items-center gap-2 mb-4 text-yellow-500">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    {children}
    <Separator className="mt-6" />
  </div>
);

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/40 p-4 rounded-lg">
    {children}
  </div>
);
