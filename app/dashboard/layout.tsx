import Link from "next/link"; // Import the Link component
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="px-5 py-5 bg-pink-700">Navbar</div>
      <div className="flex">
        {/* Sidebar */}{" "}
        <div className="w-1/6 h-screen bg-gray-800 cursor-pointer">
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
