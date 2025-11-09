"use client";
import { useState } from "react";
import { usersData } from "@/data/users";
import { doctors } from "@/data/doctors";
import UserTable from "@/components/UserTable";
import UserFormModal from "@/components/UserFormModal";
import BackButton from "@/components/BackButton";

export default function AdminPage() {
  const [users, setUsers] = useState(usersData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  const handleDelete = (id) => setUsers(users.filter((u) => u.id !== id));

  const handleSave = (user) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      filterRole === "All" || u.role.toLowerCase() === filterRole.toLowerCase();

    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Admin Dashboard
        </h1>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name, email, or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="All">All Roles</option>
            <option value="User">User</option>
            <option value="Doctor">Doctor</option>
          </select>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add New User
          </button>
        </div>

        <UserTable
          users={filteredUsers}
          onEdit={(u) => {
            setEditingUser(u);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />

        <div className="text-center mt-8">
          <BackButton />
        </div>

        {isModalOpen && (
          <UserFormModal
            doctors={doctors}
            editingUser={editingUser}
            onSave={handleSave}
            onClose={() => {
              setIsModalOpen(false);
              setEditingUser(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
