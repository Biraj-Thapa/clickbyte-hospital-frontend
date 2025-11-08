export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Contact Us</h2>

        <div className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-8">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10 text-gray-700">
          <p>Email: contact@clickbytehospital.com</p>
          <p>Phone: +977 9812345678</p>
          <p>Address: Kathmandu, Nepal</p>
        </div>
      </div>
    </section>
  );
}
