'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleServices, setVisibleServices] = useState([]);
  const [hoveredService, setHoveredService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and applications tailored to your business goals.",
      features: ["Responsive Design", "Performance Optimization", "SEO Integration"],
      color: "from-blue-500 to-purple-600",
      icon: (
        <svg
          className="h-10 w-10 text-indigo-600 mb-4 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description: "User-centered design to deliver intuitive and engaging experiences.",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-rose-600",
      icon: (
        <svg
          className="h-10 w-10 text-indigo-600 mb-4 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
    },
    {
      title: "SEO Optimization",
      description: "Improve your visibility and drive more traffic to your site.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"],
      color: "from-green-500 to-teal-600",
      icon: (
        <svg
          className="h-10 w-10 text-indigo-600 mb-4 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "E-commerce Solutions",
      description: "Launch your online store with scalable e-commerce platforms.",
      features: ["Payment Integration", "Inventory Management", "Analytics"],
      color: "from-orange-500 to-red-600",
      icon: (
        <svg
          className="h-10 w-10 text-indigo-600 mb-4 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
          />
        </svg>
      ),
    },
    {
      title: "Brand Strategy",
      description: "Craft a powerful brand story and identity that resonates.",
      features: ["Brand Identity", "Market Research", "Visual Guidelines"],
      color: "from-purple-500 to-indigo-600",
      icon: (
        <svg
          className="h-10 w-10 text-indigo-600 mb-4 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Consulting",
      description: "Expert advice to help you navigate your digital transformation.",
      features: ["Strategic Planning", "Technology Assessment", "Implementation"],
      color: "from-cyan-500 to-blue-600",
      icon: (
        <svg
          className="h-10 w-10 text-indigo-600 mb-4 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Trigger hero animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Stagger service card animations
    services.forEach((_, index) => {
      setTimeout(() => {
        setVisibleServices(prev => [...prev, index]);
      }, 600 + (index * 150));
    });

    // Mouse move effect for hero
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      clearTimeout(timer);
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Our Services | MySite</title>
        <meta
          name="description"
          content="Discover the range of services we offer to help your business grow."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section 
          ref={heroRef}
          className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20 text-center relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Mouse-following gradient */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
            }}
          ></div>

          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h1 className={`text-4xl sm:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              Our Services
            </h1>
            <p className={`text-lg max-w-2xl mx-auto text-indigo-100 transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              We offer a suite of solutions designed to drive success and innovation in your business.
            </p>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                  visibleServices.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-6 relative">
                  {/* Hover background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {service.icon}
                    <h3 className="text-gray-900 text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Feature list - appears on hover */}
                    <div className={`space-y-2 transition-all duration-300 ${
                      hoveredService === index 
                        ? 'opacity-100 max-h-40 translate-y-0' 
                        : 'opacity-0 max-h-0 translate-y-2'
                    }`}>
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={feature}
                          className="flex items-center text-sm text-gray-500"
                          style={{
                            transitionDelay: `${featureIndex * 0.1}s`
                          }}
                        >
                          <svg className="w-4 h-4 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button className={`mt-4 text-indigo-600 text-sm font-medium flex items-center transition-all duration-300 ${
                      hoveredService === index 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-2'
                    }`}>
                      Learn More
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 text-center relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white border-opacity-20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-white border-opacity-20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className={`text-3xl font-bold mb-4 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              Let's Build Something Great Together
            </h2>
            <p className={`text-lg mb-8 transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              Get in touch to discuss how we can help your business grow.
            </p>
            <a
              href="/contact"
              className={`inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}