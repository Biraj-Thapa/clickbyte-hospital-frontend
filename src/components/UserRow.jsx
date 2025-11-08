export default function UserRow({ user, onEdit, onDelete }) {
  const formattedDate = user.appointmentTime
    ? new Date(user.appointmentTime).toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "";

  return (
    <tr className="text-center hover:bg-gray-50 transition">
      <td className="border p-3">{user.fullName}</td>
      <td className="border p-3">{user.email}</td>
      <td className="border p-3">{user.phone}</td>
      <td className="border p-3">{user.role}</td>
      <td className="border p-3">{user.gender}</td>
      <td className="border p-3">{user.address}</td>
      <td className="border p-3">{formattedDate}</td>
      <td className="border p-3">{user.assignedDoctor}</td>
      <td className="border p-3 space-x-2">
        <button
          onClick={() => onEdit(user)}
          className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
