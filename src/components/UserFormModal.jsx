import { useState } from "react";

export default function UserFormModal({ doctors, editingUser, onSave, onClose }) {
  const [formData, setFormData] = useState(
    editingUser || {
      fullName: "",
      email: "",
      phone: "",
      role: "User",
      gender: "",
      address: "",
      appointmentTime: "",
      assignedDoctor: "",
    }
  );

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {editingUser ? "Edit User" : "Add New User"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>User</option>
            <option>Doctor</option>
          </select>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="datetime-local"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <select
            name="assignedDoctor"
            value={formData.assignedDoctor}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Doctor</option>
            {doctors.map((d) => (
              <option key={d.name}>{d.name}</option>
            ))}
          </select>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
