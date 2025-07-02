// pages/contact.js
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Contact() {
  return (
    <>
    <Header/>
      <Head>
        <title>Contact Us | MySite</title>
        <meta
          name="description"
          content="Get in touch with the MySite team. We're here to help you succeed."
        />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-indigo-100">
            We'd love to hear from you. Send us a message and we'll get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            You can also reach us directly through the details below.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Email:</strong>{" "}
              <a href="talhabajwa1622@gmail.com" className="text-indigo-600 hover:underline">
                talhabajwa1622@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+923400050708" className="text-indigo-600 hover:underline">
                +92 3400050708 
              </a>
            </li>
            <li>
              <strong>Address:</strong> <br />
              123 Main Street <br />
              Suite 400 <br />
              City, State, ZIP
            </li>
          </ul>
        </div>
      </section>
      <Footer/>
    </>
  );
}
