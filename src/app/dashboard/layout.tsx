import Link from "next/link"; // Import the Link component
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
  
      <div className="flex py-10">
        {/* Sidebar */}{" "}
        <div className="w-1/6 h-screen bg-cyan-500 cursor-pointer">
          <div className="p-4 ml-5 mt-5">
            <Link href="/dashboard/user">
              <h2 className="text-lg font-semibold mb-2">User</h2>
            </Link>
            <Link href="/dashboard/city">
              <h4 className="mb-2">City</h4>
            </Link>
            <Link href="/dashboard/phone">
              <h4 className="mb-2 hover:bg-teal-700 ">Phone</h4>
            </Link>
          </div>
        </div>
        {/* Main content */}
        <div className="w-3/4 p-5">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
