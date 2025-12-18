import { TravelPlan } from "./travelPlan.interface";
import { UserInfo } from "./user.interface";

export interface Review {
  id: string;
  rating: number;
  comment: string;
  reviewerId: string;
  reviewer?: UserInfo;
  travelPlanId: string;
  travelPlan?: TravelPlan;
  createdAt: Date;
  updatedAt: Date;
}