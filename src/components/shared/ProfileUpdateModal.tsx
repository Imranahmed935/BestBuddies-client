"use client"
import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import { UserInfo } from "@/types/user.interface";
import { updateProfile } from "@/services/auth/updateProfile";

export function ProfileUpdateModal({ userInfo }: { userInfo: UserInfo }) {
  const [state, action, isPending] = useActionState(updateProfile, null);

  const [previewImage, setPreviewImage] = useState<string>(
    userInfo.profileImage || ""
  );

  const handleFilePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-5 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-xl">
          Edit Profile
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[550px]">
        <form action={action} className="space-y-4">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Edit Profile</DialogTitle>
            <DialogDescription>
              Update your personal information and profile photo.
            </DialogDescription>
          </DialogHeader>

          <input type="hidden" name="id" value={userInfo.id} />

          <div className="grid gap-6 mt-4">
            {/* Profile Image Upload + Preview */}
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 border">
                <AvatarImage src={previewImage || ""} alt="Profile" />
                <AvatarFallback>IMG</AvatarFallback>
              </Avatar>

              <label className="cursor-pointer flex items-center gap-2 text-sm text-yellow-400 font-medium">
                <Camera className="w-4 h-4" />
                Change Photo
                <Input
                  type="file"
                  name="file"
                  accept="image/*"
                  onChange={handleFilePreview}
                  className="hidden"
                />
              </label>
            </div>

            {/* Name + Username */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  defaultValue={userInfo.fullName}
                  className="border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400"
                />
              </div>

              <div className="grid gap-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  defaultValue={userInfo.username as string}
                  className="border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Email + Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={userInfo.email}
                  className="border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400"
                />
              </div>

              <div className="grid gap-1">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  defaultValue={userInfo.contactNumber || ""}
                  className="border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Age + Gender */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  defaultValue={userInfo.age || ""}
                  className="border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400"
                />
              </div>

              <div className="grid gap-1">
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  name="gender"
                  defaultValue={userInfo.gender || ""}
                  className="border border-yellow-400 rounded-md p-2 focus:border-yellow-400 focus:ring-yellow-400"
                >
                  <option value="">Select</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>

            {/* Bio */}
            <div className="grid gap-1">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                rows={3}
                defaultValue={userInfo.bio || ""}
                className="border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>

            {/* Current Location */}
            <div className="grid gap-1">
              <Label htmlFor="currentLocation">Current Location</Label>
              <Input
                id="currentLocation"
                name="currentLocation"
                defaultValue={userInfo.currentLocation || ""}
                className="border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>

            {/* Travel Interests */}
            <div className="grid gap-1">
              <Label htmlFor="travelInterests">Travel Interests</Label>
              <Input
                id="travelInterests"
                name="travelInterests"
                defaultValue={userInfo.travelInterests?.join(", ")}
                className="border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>

            {/* Visited Countries */}
            <div className="grid gap-1">
              <Label htmlFor="visitedCountries">Visited Countries</Label>
              <Input
                id="visitedCountries"
                name="visitedCountries"
                defaultValue={userInfo.visitedCountries?.join(", ")}
                className="border-yellow-400 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>
          </div>

          <DialogFooter className="mt-6 flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline" disabled={isPending}>
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
              disabled={isPending}
            >
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
