import { UserInfo } from "./user.interface";

export interface Payment {
  id: string;
  userId: string;
  user?: UserInfo;
  amount: number;
  paymentGateway: string;
  transactionId?: string | null;
  paymentType: string;
  status: string;
  createdAt: Date;
}