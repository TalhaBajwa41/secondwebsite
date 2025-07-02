// pages/services.js
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Services() {
  return (
    <>
    <Header/>
      <Head>
        <title>Our Services | MySite</title>
        <meta
          name="description"
          content="Discover the range of services we offer to help your business grow."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-indigo-100">
          We offer a suite of solutions designed to drive success and innovation in your business.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              description: "Custom websites and applications tailored to your business goals.",
              icon: (
                <svg
                  className="h-10 w-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
                  />
                </svg>
              ),
            },
            {
              title: "UI/UX Design",
              description: "User-centered design to deliver intuitive and engaging experiences.",
              icon: (
                <svg
                  className="h-10 w-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A4 4 0 0012 3.8v16.4a4 4 0 001.555-7.632l3.197-2.132z"
                  />
                </svg>
              ),
            },
            {
              title: "SEO Optimization",
              description: "Improve your visibility and drive more traffic to your site.",
              icon: (
                <svg
                  className="h-10 w-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h4l3 8 4-16 3 8h4"
                  />
                </svg>
              ),
            },
            {
              title: "E-commerce Solutions",
              description: "Launch your online store with scalable e-commerce platforms.",
              icon: (
                <svg
                  className="h-10 w-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.9-.55L21 9M7 13V6h13"
                  />
                </svg>
              ),
            },
            {
              title: "Brand Strategy",
              description: "Craft a powerful brand story and identity that resonates.",
              icon: (
                <svg
                  className="h-10 w-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.5 0 3 .5 4 1.5S18 12 18 14s-.5 3-1.5 4S13.5 20 12 20s-3-.5-4-1.5S6 16 6 14s.5-3 1.5-4S10.5 8 12 8z"
                  />
                </svg>
              ),
            },
            {
              title: "Consulting",
              description: "Expert advice to help you navigate your digital transformation.",
              icon: (
                <svg
                  className="h-10 w-10 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m4-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              ),
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-black rounded-lg shadow p-6 hover:shadow-xl transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-blue py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
        <p className="text-lg mb-6">Get in touch to discuss how we can help your business grow.</p>
        <a
          href="/contact"
          className="inline-block bg-blue text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
      <Footer/>
    </>
  );
}
