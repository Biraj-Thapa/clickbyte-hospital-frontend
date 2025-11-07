'use client';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion' 

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('User')

  const handleLogin = (e) => {
    e.preventDefault()
    if (role === 'Admin') router.push('/admin')
    if (role === 'Doctor') router.push('/doctor')
    if (role === 'User') router.push('/user')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-green-100">
      <motion.form
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">Welcome Back</h2>
        <p className="text-center text-gray-500">Login to continue to the dashboard</p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option>Admin</option>
            <option>Doctor</option>
            <option>User</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-center text-gray-400 text-sm">
          For demo purposes, select role from dropdown
        </p>
      </motion.form>
    </div>
  )
}
