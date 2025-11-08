"use client";
import { usersData } from "@/data/users";
import BackButton from "@/components/BackButton";
import UserDashboard from "@/components/UserDashboard";

export default function UserPage() {
  
  const user = usersData.find((u) => u.role === "User");

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          User Dashboard
        </h1>

        <UserDashboard user={user} />

        <div className="text-center mt-8">
          <BackButton />
        </div>
      </div>
    </div>
  );
}
