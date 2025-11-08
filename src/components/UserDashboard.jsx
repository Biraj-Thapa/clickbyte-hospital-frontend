export default function UserDashboard({ user }) {
  if (!user) return <p className="text-center text-gray-500">No user data found.</p>;

  const appointmentTime = new Date(user.appointmentTime).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="space-y-4 text-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <p><span className="font-semibold">Full Name:</span> {user.fullName}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between">
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">Gender:</span> {user.gender}</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between">
        <p><span className="font-semibold">Address:</span> {user.address}</p>
        <p><span className="font-semibold">Appointment:</span> {appointmentTime}</p>
      </div>

      <p><span className="font-semibold">Assigned Doctor:</span> {user.assignedDoctor}</p>
    </div>
  );
}
