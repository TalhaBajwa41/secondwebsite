'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef();

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  // Mouse movement tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Enhanced team members with more details
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Jane founded MySite with a vision to transform how businesses connect with their customers through innovative technology.",
      skills: ["Leadership", "Strategy", "Innovation"],
      experience: "10+ years",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "John Smith",
      role: "Head of Engineering",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "John leads our technical team with over 10 years of experience in full-stack development and system architecture.",
      skills: ["React", "Node.js", "AWS"],
      experience: "8+ years",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Sarah brings creative vision to life, ensuring every project delivers exceptional user experiences and visual impact.",
      skills: ["UI/UX", "Design", "Branding"],
      experience: "7+ years",
      social: {
        linkedin: "#",
        dribbble: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      bio: "Michael bridges the gap between technical implementation and user needs, driving product strategy and development.",
      skills: ["Strategy", "Analytics", "Agile"],
      experience: "6+ years",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive real results.",
      icon: "🚀",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Quality",
      description: "Every project receives meticulous attention to detail and rigorous quality assurance.",
      icon: "⭐",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Collaboration",
      description: "We believe in working closely with our clients as true partners in their success.",
      icon: "🤝",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Integrity",
      description: "Transparency and honesty form the foundation of all our client relationships.",
      icon: "🛡️",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", description: "Started with a vision to revolutionize digital experiences" },
    { year: "2020", title: "First Major Client", description: "Secured partnership with Fortune 500 company" },
    { year: "2021", title: "Team Expansion", description: "Grew to 15+ talented professionals" },
    { year: "2022", title: "International Reach", description: "Expanded services to global markets" },
    { year: "2023", title: "Innovation Award", description: "Recognized for outstanding technical achievement" },
    { year: "2024", title: "50+ Projects", description: "Delivered successful solutions across industries" }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: "📊" },
    { number: "5+", label: "Years Experience", icon: "⏰" },
    { number: "100%", label: "Client Satisfaction", icon: "😊" },
    { number: "15+", label: "Team Members", icon: "👥" }
  ];

  // Register elements for intersection observer
  const registerElement = (element) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  return (
    <>
      <Header />
      <Head>
        <title>About Us | MySite - Innovative Solutions for Your Success</title>
        <meta
          name="description"
          content="Learn more about MySite, our mission, values, and the passionate team behind our innovative solutions. Building technology that empowers businesses worldwide."
        />
        <meta name="keywords" content="about MySite, team, mission, values, technology solutions" />
        <meta property="og:title" content="About Us | MySite" />
        <meta property="og:description" content="Discover our story, meet our team, and learn about our commitment to delivering exceptional results." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Enhanced Hero Section with Parallax */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://source.unsplash.com/1600x900/?team,office,modern"
            alt="About Hero - Modern Office Team"
            fill
            className="object-cover opacity-30"
            priority
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-purple-900/50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent animate-gradient">
              About MySite
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delayed">
              Building innovative solutions to help you succeed in the digital age.
              We're passionate about creating technology that makes a difference.
            </p>
            
            {/* Enhanced Stats with Hover Effects */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-in-delayed-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Navigation Tabs */}
      <section className="bg-white shadow-lg border-b sticky top-0 z-50 backdrop-blur-md bg-white/95">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-8" aria-label="About sections">
            {[
              { id: "story", label: "Our Story", icon: "📖" },
              { id: "timeline", label: "Timeline", icon: "⏱️" },
              { id: "values", label: "Our Values", icon: "💎" },
              { id: "team", label: "Meet the Team", icon: "👥" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 flex items-center space-x-2 hover:scale-105 ${
                  activeTab === tab.id
                    ? "border-indigo-600 text-indigo-600 bg-indigo-50/50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="group-hover:animate-bounce">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Enhanced Content Sections */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Our Story - Enhanced */}
          {activeTab === "story" && (
            <div className="animate-tab-transition" id="story-section" ref={registerElement}>
              <h2 className="text-5xl font-bold mb-8 text-center text-gray-800 animate-slide-down">
                Our Story
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-slide-right">
                  <div className="prose prose-lg">
                    <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                      MySite started with a simple mission: to empower businesses
                      through technology and creativity. What began as a small team
                      with big dreams has grown into a passionate organization
                      dedicated to delivering exceptional results for our clients worldwide.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                      Over the years, we've had the privilege of working with
                      startups, enterprises, and everything in between. Each project
                      teaches us something new and drives us to push the boundaries
                      of what's possible.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                      Today, we continue to evolve, embracing new technologies and
                      methodologies to ensure our clients stay ahead in an
                      ever-changing digital landscape.
                    </p>
                  </div>
                  
                  {/* Progress indicators */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Founded in 2019</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-sm text-gray-600">50+ Successful Projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span className="text-sm text-gray-600">Global Reach</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative animate-slide-left">
                  <div className="relative group">
                    <Image
                      src="https://source.unsplash.com/600x400/?startup,office"
                      alt="Our journey and growth"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Section - New */}
          {activeTab === "timeline" && (
            <div className="animate-tab-transition" id="timeline-section" ref={registerElement}>
              <h2 className="text-5xl font-bold mb-8 text-center text-gray-800 animate-slide-down">
                Our Journey
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.year}
                      className={`flex items-center ${
                        index % 2 === 0 ? 'justify-start' : 'justify-end'
                      } animate-slide-in`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform">
                          <div className="text-2xl font-bold text-indigo-600 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Values Section */}
          {activeTab === "values" && (
            <div className="animate-tab-transition" id="values-section" ref={registerElement}>
              <h2 className="text-5xl font-bold mb-8 text-center text-gray-800 animate-slide-down">
                Our Values
              </h2>
              <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto animate-fade-in">
                These core principles guide everything we do and shape how we
                work with our clients and each other.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Team Section */}
          {activeTab === "team" && (
            <div className="animate-tab-transition" id="team-section" ref={registerElement}>
              <h2 className="text-5xl font-bold mb-8 text-center text-gray-800 animate-slide-down">
                Meet the Team
              </h2>
              <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto animate-fade-in">
                Behind every great project is a team of passionate individuals
                who bring diverse skills and perspectives to create something amazing.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className="group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="rounded-full mx-auto border-4 border-indigo-100 group-hover:border-indigo-300 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1 text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full group-hover:bg-indigo-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="text-gray-400 hover:text-indigo-600 transition-colors transform hover:scale-110"
                          aria-label={`${member.name} on ${platform}`}
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors">
                            {platform === 'linkedin' && '💼'}
                            {platform === 'twitter' && '🐦'}
                            {platform === 'github' && '👨‍💻'}
                            {platform === 'dribbble' && '🎨'}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 animate-slide-up">
            Ready to work with us?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 animate-fade-in">
            Let's build something amazing together. We're excited to hear about your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="/contact"
              className="group inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="group-hover:animate-pulse">Start a Project</span>
            </a>
            <a
              href="/portfolio"
              className="group inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="group-hover:animate-pulse">View Our Work</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes tabTransition {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-in-out 0.3s both;
        }
        
        .animate-fade-in-delayed-2 {
          animation: fadeIn 1s ease-in-out 0.6s both;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-slide-left {
          animation: slideLeft 0.8s ease-out;
        }
        
        .animate-slide-right {
          animation: slideRight 0.8s ease-out;
        }
        
        .animate-slide-in {
          animation: slideIn 0.6s ease-out;
        }
        
        .animate-tab-transition {
          animation: tabTransition 0.5s ease-in-out;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% { 
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s infinite;
        }
        
        .group:hover .group-hover\\:animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
}