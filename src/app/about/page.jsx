'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Jane founded MySite with a vision to transform how businesses connect with their customers through innovative technology.",
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
      icon: "🚀"
    },
    {
      title: "Quality",
      description: "Every project receives meticulous attention to detail and rigorous quality assurance.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in working closely with our clients as true partners in their success.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "Transparency and honesty form the foundation of all our client relationships.",
      icon: "🛡️"
    }
  ];

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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://source.unsplash.com/1600x600/?team,office,modern"
            alt="About Hero - Modern Office Team"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-purple-900/50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            About MySite
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Building innovative solutions to help you succeed in the digital age.
            We're passionate about creating technology that makes a difference.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold">50+</span>
              <p className="text-sm text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold">5+</span>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold">100%</span>
              <p className="text-sm text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-8" aria-label="About sections">
            {[
              { id: "story", label: "Our Story" },
              { id: "values", label: "Our Values" },
              { id: "team", label: "Meet the Team" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Our Story */}
          {activeTab === "story" && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
                Our Story
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    MySite started with a simple mission: to empower businesses
                    through technology and creativity. What began as a small team
                    with big dreams has grown into a passionate organization
                    dedicated to delivering exceptional results for our clients worldwide.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Over the years, we've had the privilege of working with
                    startups, enterprises, and everything in between. Each project
                    teaches us something new and drives us to push the boundaries
                    of what's possible.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Today, we continue to evolve, embracing new technologies and
                    methodologies to ensure our clients stay ahead in an
                    ever-changing digital landscape.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://source.unsplash.com/600x400/?startup,office"
                    alt="Our journey and growth"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Our Values */}
          {activeTab === "values" && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
                Our Values
              </h2>
              <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we
                work with our clients and each other.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Meet the Team */}
          {activeTab === "team" && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
                Meet the Team
              </h2>
              <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
                Behind every great project is a team of passionate individuals
                who bring diverse skills and perspectives to create something amazing.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto mb-4 border-4 border-indigo-100"
                    />
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex justify-center space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="text-gray-400 hover:text-indigo-600 transition-colors"
                          aria-label={`${member.name} on ${platform}`}
                        >
                          <span className="sr-only">{platform}</span>
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Ready to work with us?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Let's build something amazing together. We're excited to hear about your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start a Project
            </a>
            <a
              href="/portfolio"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}