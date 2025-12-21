"use client";

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
import { formatDateTime, getInitials } from "@/lib/formatters";
import { Payment } from "@/types/payment.interface";

import {
  Calendar,
  CreditCard,
  DollarSign,
  User,
  MapPin,
} from "lucide-react";

interface PaymentViewDialogDetailProps {
  open: boolean;
  onClose: () => void;
  payment: Payment | null;
}

const PaymentViewDialogDetail = ({
  open,
  onClose,
  payment,
}: PaymentViewDialogDetailProps) => {
  if (!payment) return null;

  const user = payment.user;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Payment Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg mb-6">
            <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
              <AvatarImage src={user?.profileImage || ""} />
              <AvatarFallback className="text-xl">
                {getInitials(user?.fullName || "U")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-1">
                {user?.fullName || "Unknown User"}
              </h2>

              <p className="text-muted-foreground mb-2">
                {user?.email || "No email"}
              </p>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Badge
                  className={`text-sm ${
                    payment.status === "PAID"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {payment.status}
                </Badge>

                <Badge variant="outline">{payment.paymentGateway}</Badge>
                <Badge variant="secondary">{payment.paymentType}</Badge>
              </div>
            </div>
          </div>

          {/* PAYMENT INFO */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Payment Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-4 w-4 mt-1 text-muted-foreground" />
                  <InfoRow label="Amount" value={`$${payment.amount}`} />
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="h-4 w-4 mt-1 text-muted-foreground" />
                  <InfoRow
                    label="Transaction ID"
                    value={payment.transactionId || "N/A"}
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* USER INFO */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold text-lg">User Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                  <InfoRow
                    label="Location"
                    value={user?.currentLocation || "Not specified"}
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* META */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                <InfoRow
                  label="Created At"
                  value={formatDateTime(payment.createdAt)}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentViewDialogDetail;
