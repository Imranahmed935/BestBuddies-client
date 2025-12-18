/* eslint-disable @typescript-eslint/no-explicit-any */

import { JoinRequest } from "./join.inerface";
import { Payment } from "./payment.inteface";
import { Review } from "./review.interface";
import { TravelPlan } from "./travelPlan.interface";


export type Gender = "MALE" | "FEMALE" | "OTHER";
export type Status = "ACTIVE" | "INACTIVE" | "DELETED" | "BANNED" | "PENDING";
export type Role = "USER" | "ADMIN";

export interface UserInfo {
  id: string;
  username?: string | null;
  email: string;
  password: string;
  fullName: string;
  profileImage?: string | null;
  bio?: string | null;
  age?: number;
  gender?: Gender;
  currentLocation?: string | null;

  travelInterests: string[];
  visitedCountries: string[];

  userStatus: Status;
  role: Role;
  verified: boolean;

  contactNumber?: string;

  rating: number;
  subscriptionActive: boolean;
  subscriptionExpiresAt?: Date | null;

  payments?: Payment;
  hostedPlans?: TravelPlan[];
  joinedPlans?: TravelPlan[];
  reviews?: Review[];
  joinRequests?: JoinRequest[];

  lastLoginAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
