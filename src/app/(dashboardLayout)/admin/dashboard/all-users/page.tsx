

import UserManagementHeader from "@/components/modules/admin/userManagement/UserManagementHeader";
import UserTable from "@/components/modules/admin/userManagement/UserTable";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getAllUsers } from "@/services/admin/allUser";


import { Suspense } from "react";

const UserManagementPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const userResult = await getAllUsers();
  console.log(userResult)
  return (
    <div className="space-y-6">
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
      <UserManagementHeader />
      <div className="flex space-x-2">
        <SearchFilter paramName="searchTerm" placeholder="Search patients..." />
        
        <RefreshButton />
      </div>
        <UserTable users={userResult.data}/>
      </Suspense>
    </div>
  );
};

export default UserManagementPage;