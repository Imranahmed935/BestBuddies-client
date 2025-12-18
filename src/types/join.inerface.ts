import { RequestStatus, TravelPlan } from "./travelPlan.interface";
import { UserInfo } from "./user.interface";

export interface JoinRequest {
  id: string;
  planId: string;
  plan?: TravelPlan;
  applicantId: string;
  applicant?: UserInfo;
  status: RequestStatus;
  message?: string | null;
  createdAt: Date;
}