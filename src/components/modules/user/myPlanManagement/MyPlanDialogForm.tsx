"use client";

import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createTravelPlan, updateMyPlan } from "@/services/user/myPlan";
import { TravelPlan } from "@/types/travelPlan.interface";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

interface IMyPlanFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  travelPlan?: TravelPlan | null;
  hostId?: string;
}

const formatDateForInput = (date?: string | Date) => {
  if (!date) return "";
  return new Date(date).toISOString().slice(0, 10);
};

const MyPlanFormDialog = ({
  open,
  onClose,
  travelPlan,
}: IMyPlanFormDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const isEdit = !!travelPlan?.id;

  const [state, action, isPending] = useActionState(
    isEdit
      ? updateMyPlan.bind(null, travelPlan?.id as string)
      : createTravelPlan,
    null
  );

  useEffect(() => {
    if (state?.success) {
      toast.success("Travel Plan saved successfully!");
      onClose();
    } else if (state?.message) {
      toast.error(state.message);
    }
  }, [state, onClose]);

  const handleClose = () => {
    formRef.current?.reset();
    onClose();
  };

  return (
<Dialog open={open} onOpenChange={handleClose}>
  <DialogContent className="max-h-[90vh] flex flex-col p-0">
    <DialogHeader className="px-6 pt-6 pb-4">
      <DialogTitle>
        {isEdit ? "Edit Travel Plan" : "Create Travel Plan"}
      </DialogTitle>
    </DialogHeader>

    <form
      ref={formRef}
      action={action}
      className="flex flex-col flex-1 min-h-0"
    >
      <div className="flex-1 overflow-y-auto px-6 space-y-6 pb-4">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Title</FieldLabel>
            <Input
              name="title"
              placeholder="title"
              defaultValue={travelPlan?.title ?? ""}
            />
            <InputFieldError field="title" state={state} />
          </Field>

          <Field>
            <FieldLabel>Destination</FieldLabel>
            <Input
              name="destination"
              placeholder="destination"
              defaultValue={travelPlan?.destination ?? ""}
            />
            <InputFieldError field="destination" state={state} />
          </Field>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Start Date</FieldLabel>
            <Input
              type="date"
              name="startDate"
              placeholder="startDate"
              defaultValue={formatDateForInput(travelPlan?.startDate)}
            />
          </Field>

          <Field>
            <FieldLabel>End Date</FieldLabel>
            <Input
              type="date"
              name="endDate"
              placeholder="endDate"
              defaultValue={formatDateForInput(travelPlan?.endDate)}
            />
          </Field>
        </div>

        {/* Budget, Members, Age Limit */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field>
            <FieldLabel>Budget</FieldLabel>
            <Input
              type="number"
              name="budget"
              placeholder="budget"
              defaultValue={travelPlan?.budget ?? ""}
            />
          </Field>

          <Field>
            <FieldLabel>Age Limit</FieldLabel>
            <Input
              type="number"
              name="ageLimit"
              placeholder="ageLimit"
              defaultValue={travelPlan?.ageLimit ?? ""}
            />
          </Field>

          <Field>
            <FieldLabel>Members</FieldLabel>
            <Input
              type="number"
              name="members"
              placeholder="members"
              defaultValue={travelPlan?.members ?? ""}
            />
          </Field>
        </div>

        {/* Travel & Accommodation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Travel Type</FieldLabel>
            <Input
              name="travelType"
              placeholder="travelType"
              defaultValue={travelPlan?.travelType ?? ""}
            />
          </Field>

          <Field>
            <FieldLabel>Stay</FieldLabel>
            <Input
              name="stay"
              placeholder="stay"
              defaultValue={travelPlan?.stay ?? ""}
            />
          </Field>

          <Field>
            <FieldLabel>Accommodation Type</FieldLabel>
            <Input
              name="accommodationType"
              placeholder="accommodationType"
              defaultValue={travelPlan?.accommodationType ?? ""}
            />
          </Field>

          <Field>
            <FieldLabel>Transport Type</FieldLabel>
            <Input
              name="transportType"
              placeholder="transportType"
              defaultValue={travelPlan?.transportType ?? ""}
            />
          </Field>

          <Field>
            <FieldLabel>Meal Plan</FieldLabel>
            <Input
              name="mealPlan"
              placeholder="mealPlan"
              defaultValue={travelPlan?.mealPlan ?? ""}
            />
          </Field>
        </div>

        {/* Documents & Inclusions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field>
            <FieldLabel>Required Documents</FieldLabel>
            <Input
              name="requiredDocuments"
              placeholder="requiredDocuments"
              defaultValue={travelPlan?.requiredDocuments ?? ""}
            />
          </Field>

          <Field>
            <FieldLabel>Included</FieldLabel>
            <Input
              name="included"
              placeholder="included"
              defaultValue={travelPlan?.included ?? ""}
            />
          </Field>

          <Field>
            <FieldLabel>Excluded</FieldLabel>
            <Input
              name="excluded"
              placeholder="excluded"
              defaultValue={travelPlan?.excluded ?? ""}
            />
          </Field>
        </div>

        {/* Meeting & Emergency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Meeting Point</FieldLabel>
            <Input
              name="meetingPoint"
              placeholder="meetingPoint"
              defaultValue={travelPlan?.meetingPoint ?? ""}
            />
          </Field>

          <Field>
            <FieldLabel>Emergency Contact</FieldLabel>
            <Input
              name="emergencyContact"
              placeholder="emergencyContact"
              defaultValue={travelPlan?.emergencyContact ?? ""}
            />
          </Field>
        </div>

        {/* Photo Upload */}
        <Field>
          <FieldLabel>Photo</FieldLabel>
          <Input type="file" name="file" />
        </Field>

        {/* Plan Status */}
        <Field>
          <FieldLabel>Plan Status</FieldLabel>
          <select
            name="planStatus"
            defaultValue={travelPlan?.planStatus ?? "OPEN"}
            className="w-full border rounded p-2"
          >
            <option value="OPEN">OPEN</option>
            <option value="CLOSED">CLOSED</option>
            <option value="FULL">FULL</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </Field>

        {/* Description */}
        <Field>
          <FieldLabel>Description</FieldLabel>
          <Textarea
            name="description"
            rows={5}
            placeholder="description"
            defaultValue={travelPlan?.description ?? ""}
          />
          <InputFieldError field="description" state={state} />
        </Field>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
        <Button type="button" variant="outline" onClick={handleClose}>
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={isPending}
          className="bg-yellow-400 hover:bg-yellow-500 text-black"
        >
          {isPending ? "Saving..." : isEdit ? "Update Plan" : "Create Plan"}
        </Button>
      </div>
    </form>
  </DialogContent>
</Dialog>

  );
};

export default MyPlanFormDialog;
