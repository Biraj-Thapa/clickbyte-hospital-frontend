"use client"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-8 bg-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
          Your Health, Our Priority
        </h1>
        <p className="mt-4 text-gray-600">
          Trusted healthcare professionals delivering exceptional patient care.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Book Appointment
        </button>
      </motion.div>

      <img
        src="https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        alt="hospital"
        className="w-full md:w-1/2 rounded-2xl shadow-lg mt-10 md:mt-0"
      />
    </section>
  );
}
