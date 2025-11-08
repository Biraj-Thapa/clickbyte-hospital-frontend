export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold">Clickbyte Hospital</p>
        <p className="text-gray-300 mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>

        <div className="flex justify-center space-x-6 mt-4 text-gray-300">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
