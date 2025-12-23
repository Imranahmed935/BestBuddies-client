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

export interface TReview {
  id: string;
  rating: number;
  comment: string;
  reviewer: {
    fullName: string;
    email: string;
    profileImage?: string | null;
  };
  travelPlan: {
    id: string;
    title: string;
  };
  createdAt: string;
  updatedAt: string;
}
