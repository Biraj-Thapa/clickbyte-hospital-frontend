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

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Admin Dashboard
        </h1>

        <UserTable
          users={users}
          onEdit={(u) => {
            setEditingUser(u);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add New User
          </button>
        </div>

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
