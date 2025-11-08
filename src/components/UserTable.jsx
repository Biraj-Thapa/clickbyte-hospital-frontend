import UserRow from "./UserRow";

export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-sm">
        <thead>
          <tr className="bg-blue-100 text-blue-800">
            <th className="border p-3">Full Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Phone</th>
            <th className="border p-3">Role</th>
            <th className="border p-3">Gender</th>
            <th className="border p-3">Address</th>
            <th className="border p-3">Appointment</th>
            <th className="border p-3">Assigned Doctor</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <UserRow key={u.id} user={u} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
