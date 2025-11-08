import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-blue-700">
         Clickbyte Hospital
        </Link>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          <li>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
