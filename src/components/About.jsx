export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309"
          alt="about hospital"
          className="w-full md:w-1/2 rounded-2xl shadow-lg mb-8 md:mb-0"
        />

        <div className="md:ml-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">About Our Hospital</h2>
          <p className="text-gray-600 leading-relaxed">
            MediCare Hospital is committed to providing world-class healthcare services.
            Our dedicated team of professionals ensures that every patient receives personalized,
            compassionate care. We focus on innovation, precision, and patient safety to make your
            health our top priority.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
