import { UserInfo } from "./user.interface";

export enum PaymentGateway {
  STRIPE = "STRIPE",
}

export enum PaymentType {
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
}

export enum PaymentStatus {
  PAID = "PAID",
  UNPAID = "UNPAID",
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  paymentGateway: PaymentGateway;
  transactionId: string | null;
  paymentType: PaymentType;
  status: PaymentStatus;
  createdAt: string; 
  user?: UserInfo;
}
