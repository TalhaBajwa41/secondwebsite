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
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const heroRef = useRef(null);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and applications tailored to your business goals with cutting-edge technologies.",
      features: ["Responsive Design", "Performance Optimization", "SEO Integration", "Progressive Web Apps"],
      category: "development",
      pricing: "Starting from $2,500",
      timeline: "4-8 weeks",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
      benefits: [
        "Increased online visibility and brand presence",
        "Better user engagement and conversion rates",
        "Scalable architecture for future growth",
        "Mobile-first responsive design"
      ],
      processSteps: [
        "Discovery & Requirements Analysis",
        "Design & Prototyping",
        "Development & Testing",
        "Launch & Optimization"
      ],
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
      description: "User-centered design to deliver intuitive and engaging experiences that convert visitors into customers.",
      features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
      category: "design",
      pricing: "Starting from $1,800",
      timeline: "3-6 weeks",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      benefits: [
        "Improved user satisfaction and retention",
        "Higher conversion rates and sales",
        "Reduced development costs through better planning",
        "Consistent brand experience across platforms"
      ],
      processSteps: [
        "User Research & Analysis",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Design & Testing"
      ],
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
      description: "Comprehensive SEO strategies to improve your visibility and drive qualified traffic to your site.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Local SEO"],
      category: "marketing",
      pricing: "Starting from $800/month",
      timeline: "3-6 months for results",
      technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Schema Markup"],
      benefits: [
        "Increased organic traffic and visibility",
        "Better search engine rankings",
        "Higher quality leads and conversions",
        "Long-term sustainable growth"
      ],
      processSteps: [
        "SEO Audit & Competitor Analysis",
        "Keyword Strategy Development",
        "On-Page & Technical Optimization",
        "Content Creation & Link Building"
      ],
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
      description: "Launch and scale your online store with powerful e-commerce platforms and integrations.",
      features: ["Payment Integration", "Inventory Management", "Analytics", "Multi-channel Selling"],
      category: "development",
      pricing: "Starting from $3,500",
      timeline: "6-12 weeks",
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Inventory APIs"],
      benefits: [
        "Increased sales and revenue potential",
        "Streamlined inventory and order management",
        "Better customer experience and retention",
        "Scalable platform for business growth"
      ],
      processSteps: [
        "Platform Selection & Setup",
        "Design & User Experience",
        "Payment & Shipping Integration",
        "Testing & Launch"
      ],
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
      description: "Craft a powerful brand story and identity that resonates with your target audience.",
      features: ["Brand Identity", "Market Research", "Visual Guidelines", "Brand Messaging"],
      category: "design",
      pricing: "Starting from $2,200",
      timeline: "4-8 weeks",
      technologies: ["Adobe Creative Suite", "Brand Guidelines", "Market Research Tools"],
      benefits: [
        "Strong brand recognition and recall",
        "Differentiation from competitors",
        "Increased customer loyalty and trust",
        "Consistent brand experience across touchpoints"
      ],
      processSteps: [
        "Brand Discovery & Research",
        "Strategy Development",
        "Visual Identity Creation",
        "Brand Guidelines & Implementation"
      ],
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
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to reach and engage your target audience effectively.",
      features: ["Social Media Marketing", "PPC Advertising", "Email Marketing", "Content Marketing"],
      category: "marketing",
      pricing: "Starting from $1,200/month",
      timeline: "Ongoing campaigns",
      technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "Hootsuite", "Analytics Tools"],
      benefits: [
        "Increased brand awareness and reach",
        "Higher quality leads and conversions",
        "Better ROI on marketing spend",
        "Data-driven campaign optimization"
      ],
      processSteps: [
        "Strategy Development & Planning",
        "Campaign Creation & Setup",
        "Execution & Monitoring",
        "Optimization & Reporting"
      ],
      color: "from-yellow-500 to-orange-600",
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
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
    },
    {
      title: "Consulting",
      description: "Expert advice and strategic guidance to help you navigate your digital transformation journey.",
      features: ["Strategic Planning", "Technology Assessment", "Implementation", "Training & Support"],
      category: "consulting",
      pricing: "Starting from $150/hour",
      timeline: "Varies by project",
      technologies: ["Various based on needs", "Industry Best Practices", "Custom Solutions"],
      benefits: [
        "Expert guidance and industry insights",
        "Reduced risk and implementation time",
        "Cost-effective technology decisions",
        "Ongoing support and optimization"
      ],
      processSteps: [
        "Needs Assessment & Analysis",
        "Strategy Development",
        "Implementation Planning",
        "Execution Support & Training"
      ],
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
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"],
      category: "development",
      pricing: "Starting from $8,000",
      timeline: "8-16 weeks",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      benefits: [
        "Reach customers on mobile devices",
        "Improved user engagement and retention",
        "New revenue streams and opportunities",
        "Enhanced brand presence and accessibility"
      ],
      processSteps: [
        "Concept & Planning",
        "UI/UX Design",
        "Development & Testing",
        "App Store Submission & Launch"
      ],
      color: "from-indigo-500 to-purple-600",
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
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'consulting', name: 'Consulting' }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const stats = [
    { label: "Projects Completed", value: "500+", icon: "📊" },
    { label: "Happy Clients", value: "200+", icon: "😊" },
    { label: "Years Experience", value: "8+", icon: "🏆" },
    { label: "Team Members", value: "25+", icon: "👥" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      text: "Their web development team delivered an outstanding e-commerce platform that exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Pro",
      text: "The SEO optimization service helped us increase our organic traffic by 300% in just 6 months.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "Amazing UI/UX design work that transformed our brand identity and improved user engagement significantly.",
      rating: 5
    }
  ];

  useEffect(() => {
    // Trigger hero animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Stagger service card animations
    filteredServices.forEach((_, index) => {
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
  }, [filteredServices]);

  // Reset animations when tab changes
  useEffect(() => {
    setVisibleServices([]);
    filteredServices.forEach((_, index) => {
      setTimeout(() => {
        setVisibleServices(prev => [...prev, index]);
      }, index * 100);
    });
  }, [activeTab]);

  return (
    <>
      <Head>
        <title>Our Services | MySite - Web Development, Design & Digital Marketing</title>
        <meta
          name="description"
          content="Comprehensive digital services including web development, UI/UX design, SEO optimization, e-commerce solutions, and digital marketing to grow your business."
        />
        <meta name="keywords" content="web development, UI/UX design, SEO, e-commerce, digital marketing, mobile apps, consulting" />
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
              We offer a comprehensive suite of digital solutions designed to drive success and innovation in your business.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Filter */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer ${
                  visibleServices.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => setSelectedService(service)}
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
                    
                    {/* Pricing and Timeline */}
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <span className="text-indigo-600 font-semibold">{service.pricing}</span>
                      <span className="text-gray-500">{service.timeline}</span>
                    </div>
                    
                    {/* Feature list - appears on hover */}
                    <div className={`space-y-2 transition-all duration-300 ${
                      hoveredService === index 
                        ? 'opacity-100 max-h-40 translate-y-0' 
                        : 'opacity-0 max-h-0 translate-y-2'
                    }`}>
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
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

        {/* Service Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    {selectedService.icon}
                    <h2 className="text-2xl font-bold text-gray-900 ml-4">{selectedService.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <p className="text-gray-600 mb-6">{selectedService.description}</p>
                    
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start text-gray-600">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Starting Price:</span>
                          <span className="font-semibold text-indigo-600">{selectedService.pricing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Timeline:</span>
                          <span className="font-semibold">{selectedService.timeline}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-3">Our Process</h3>
                    <ol className="space-y-3">
                      {selectedService.processSteps.map((step, index) => (
                        <li key={step} className="flex items-start">
                          <span className="bg-indigo-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href="/contact"
                    className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure every project delivers exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We start by understanding your business goals, target audience, and project requirements.",
                  icon: "🔍"
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Strategic planning and roadmap creation to ensure project success and timeline adherence.",
                  icon: "📋"
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "Our expert team brings your vision to life with cutting-edge technologies and best practices.",
                  icon: "⚡"
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Testing, optimization, and successful launch with ongoing support and maintenance.",
                  icon: "🚀"
                }
              ].map((phase, index) => (
                <div
                  key={phase.step}
                  className={`text-center transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{phase.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it - hear from our satisfied clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`bg-gray-50 p-6 rounded-xl transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our services.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer: "Yes, we offer comprehensive support and maintenance packages to keep your digital assets running smoothly. This includes security updates, performance optimization, and technical support."
                },
                {
                  question: "Can you work with our existing team?",
                  answer: "Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly with your existing workflows and development processes."
                },
                {
                  question: "What's included in your pricing?",
                  answer: "Our pricing includes initial consultation, design and development work, testing, and deployment. Additional services like ongoing maintenance, training, and extended support are available separately."
                },
                {
                  question: "Do you work with businesses of all sizes?",
                  answer: "Yes, we work with everyone from startups to enterprise-level organizations. We tailor our approach and solutions to match your business size, budget, and specific needs."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-sm transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our expertise spans across various industries, delivering tailored solutions for unique business needs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Healthcare", icon: "🏥" },
                { name: "E-commerce", icon: "🛒" },
                { name: "Education", icon: "📚" },
                { name: "Finance", icon: "💰" },
                { name: "Real Estate", icon: "🏠" },
                { name: "Technology", icon: "💻" },
                { name: "Restaurant", icon: "🍽️" },
                { name: "Fashion", icon: "👗" },
                { name: "Travel", icon: "✈️" },
                { name: "Sports", icon: "⚽" },
                { name: "Non-profit", icon: "🤝" },
                { name: "Manufacturing", icon: "🏭" }
              ].map((industry, index) => (
                <div
                  key={industry.name}
                  className={`text-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2">{industry.icon}</div>
                  <div className="text-sm font-medium text-gray-700">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 text-center relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white border-opacity-20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-white border-opacity-20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white border-opacity-10 rounded-full animate-pulse"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className={`text-3xl font-bold mb-4 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              Ready to Transform Your Business?
            </h2>
            <p className={`text-lg mb-8 transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              <a
                href="/contact"
                className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Free Consultation
              </a>
              <a
                href="/portfolio"
                className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </a>
            </div>
            
            {/* Contact Info */}
            <div className={`mt-12 grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              <div>
                <div className="text-2xl mb-2">📞</div>
                <div className="text-sm opacity-90">Call Us</div>
                <div className="font-semibold">+1 (555) 123-4567</div>
              </div>
              <div>
                <div className="text-2xl mb-2">✉️</div>
                <div className="text-sm opacity-90">Email Us</div>
                <div className="font-semibold">hello@mysite.com</div>
              </div>
              <div>
                <div className="text-2xl mb-2">💬</div>
                <div className="text-sm opacity-90">Live Chat</div>
                <div className="font-semibold">Available 24/7</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}