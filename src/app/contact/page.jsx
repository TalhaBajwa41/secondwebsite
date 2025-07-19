'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [focusedField, setFocusedField] = useState("");

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSubmitStatus("");
    }, 3000);
  };

  return (
    <>
      <Header />
      <Head>
        <title>Contact Us | MySite</title>
        <meta
          name="description"
          content="Get in touch with the MySite team. We're here to help you succeed."
        />
      </Head>

      {/* Hero Section with Enhanced Animations */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-16 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-16 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            Contact Us
          </h1>
          <p className={`text-lg text-indigo-100 transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            We'd love to hear from you. Send us a message and we'll get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact Section with Animations */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form with Enhanced Animations */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-10'
        }`}>
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          
          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md animate-fade-in">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Message sent successfully! We'll get back to you soon.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
                className={`w-full px-4 py-3 border rounded-md transition-all duration-300 ${
                  focusedField === "name" 
                    ? 'border-indigo-500 ring-2 ring-indigo-200 shadow-lg' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="Your name"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                className={`w-full px-4 py-3 border rounded-md transition-all duration-300 ${
                  focusedField === "email" 
                    ? 'border-indigo-500 ring-2 ring-indigo-200 shadow-lg' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField("")}
                rows="4"
                className={`w-full px-4 py-3 border rounded-md transition-all duration-300 resize-none ${
                  focusedField === "message" 
                    ? 'border-indigo-500 ring-2 ring-indigo-200 shadow-lg' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 transform ${
                isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        {/* Contact Info with Enhanced Animations */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-10'
        }`}>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-700 mb-6">
            You can also reach us directly through the details below.
          </p>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="group p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a 
                    href="mailto:talhabajwa1622@gmail.com" 
                    className="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors duration-300"
                  >
                    talhabajwa1622@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <a 
                    href="tel:+923400050708" 
                    className="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors duration-300"
                  >
                    +92 3400050708
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <div className="text-gray-700">
                    123 Main Street<br />
                    Suite 400<br />
                    City, State, ZIP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Footer */}
      <div className={`transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <Footer />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}