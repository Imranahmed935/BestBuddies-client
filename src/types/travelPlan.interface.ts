/* eslint-disable @typescript-eslint/no-explicit-any */
import { JoinRequest } from "./join.inerface";
import { Review } from "./review.interface";
import { UserInfo } from "./user.interface";

export type PlanStatus = "OPEN" | "CLOSED" |"FULL"|"CANCELLED"; 
export type RequestStatus = "PENDING" | "ACCEPTED" | "REJECTED"|"CANCELLED"; 

export interface TravelPlan {
  id: string;
  title: string;
  photoUrl?: string | null;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  travelType?: string | null;
  description: string;
  ageLimit?: number | null;
  members?: number | null;
  stay?: string | null;
  accommodationType?: string | null;
  transportType?: string | null;
  mealPlan?: string | null;
  requiredDocuments?: string | null;
  included?: string | null;
  excluded?: string | null;
  meetingPoint?: string | null;
  emergencyContact?: string | null;
  planStatus: PlanStatus;
  hostId: string;
  host?: UserInfo; 
  participants?: UserInfo[];
  joinRequests?: JoinRequest[];
  reviews?: Review[];
  createdAt: Date;
  updatedAt: Date;
}






