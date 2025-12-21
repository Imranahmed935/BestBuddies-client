"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { UserInfo } from "@/types/user.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import { deleteUser } from "@/services/admin/allUser";
import { UserColumns } from "./UserColumns";
import UserViewDialogDetail from "./UserViewDialogDetail";


interface UserTableProps {
  users: UserInfo[];
}

const UserTable = ({ users }: UserTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingUser, setDeletingUser] = useState<UserInfo | null>(null);
  const [viewingUser, setViewingUser] = useState<UserInfo | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (user: UserInfo) => {
    setViewingUser(user);
  };

  const handleDelete = (user: UserInfo) => {
    setDeletingUser(user);
  };

  const confirmDelete = async () => {
    if (!deletingUser) return;

    setIsDeleting(true);

    
    const result = await deleteUser(deletingUser.id);

    setIsDeleting(false);

    if (result?.success) {
      toast.success(result.message || "Patient deleted successfully");
      setDeletingUser(null);
      handleRefresh();
    } else {
      toast.error(result?.message || "Failed to delete users");
    }
  };

  return (
    <>
      <ManagementTable
        data={users}
        columns={UserColumns}
        onView={handleView}
        onDelete={handleDelete}
        getRowKey={(user) => user.id!}
        emptyMessage="No users found"
      />
      <UserViewDialogDetail
        open={!!viewingUser}
        onClose={() => setViewingUser(null)}
        user={viewingUser}
      />
      <DeleteConfirmationDialog
        open={!!deletingUser}
        onOpenChange={(open) => !open && setDeletingUser(null)}
        onConfirm={confirmDelete}
        title="Delete Patient"
        description={`Are you sure you want to delete ${deletingUser?.fullName}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default UserTable;
