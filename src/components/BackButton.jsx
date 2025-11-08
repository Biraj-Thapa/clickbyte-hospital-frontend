"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/login")}
      className="text-blue-600 underline hover:text-blue-800"
    >
      ← Back to Login
    </button>
  );
}
