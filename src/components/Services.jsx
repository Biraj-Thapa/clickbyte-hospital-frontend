import { HeartPulse, Stethoscope, Hospital, Syringe } from "lucide-react";

const services = [
  { id: 1, title: "Emergency Care", icon: <HeartPulse size={40} />, desc: "24/7 emergency and trauma services." },
  { id: 2, title: "General Checkup", icon: <Stethoscope size={40} />, desc: "Comprehensive health checkups and diagnostics." },
  { id: 3, title: "Surgery & Operations", icon: <Hospital size={40} />, desc: "Advanced surgical facilities with expert surgeons." },
  { id: 4, title: "Vaccination", icon: <Syringe size={40} />, desc: "Routine and specialized vaccinations available." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-12">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-blue-600 flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
