"use client";
import { useState, useEffect } from "react";
import { usersData } from "@/data/users";
import { doctors } from "@/data/doctors";
import BackButton from "@/components/BackButton";

export default function DoctorPage() {
  const [doctorName, setDoctorName] = useState("Dr. Ram"); 
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const assigned = usersData.filter(
      (u) => u.assignedDoctor === doctorName && u.role === "User"
    );
    setPatients(assigned);
  }, [doctorName]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Doctor Dashboard
        </h1>

        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-700">
            Welcome, <span className="text-blue-600">{doctorName}</span>
          </p>
          <p className="text-gray-500">Here are your assigned patients:</p>
        </div>
        {patients.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Full Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Gender</th>
                  <th className="py-3 px-4 text-left">Appointment Time</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((p) => (
                  <tr key={p.id} className="border-t hover:bg-blue-50">
                    <td className="py-3 px-4">{p.fullName}</td>
                    <td className="py-3 px-4">{p.email}</td>
                    <td className="py-3 px-4">{p.phone}</td>
                    <td className="py-3 px-4">{p.gender}</td>
                    <td className="py-3 px-4">
                      {new Date(p.appointmentTime).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No patients assigned to you yet.
          </p>
        )}

        <div className="text-center mt-8">
          <BackButton />
        </div>
      </div>
    </div>
  );
}
