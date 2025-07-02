// pages/about.js
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
    <Header />
      <Head>
        <title>About Us | MySite</title>
        <meta
          name="description"
          content="Learn more about MySite, our mission, and the team behind our success."
        />
      </Head>

      {/* Hero */}
      <section className="relative bg-gray-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://source.unsplash.com/1600x600/?team,office"
            alt="About Hero"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About MySite
          </h1>
          <p className="text-lg text-gray-200">
            Building innovative solutions to help you succeed.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our Story
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          MySite started with a simple mission: to empower businesses
          through technology and creativity. Over the years, we have grown
          into a passionate team dedicated to delivering exceptional
          results for our clients worldwide.
        </p>
      </section>

      {/* Team */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Doe",
                role: "CEO & Founder",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "John Smith",
                role: "Head of Engineering",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to work with us?
        </h2>
        <p className="text-lg mb-6">
          Let’s build something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
      <Footer />
    </>
  );
}
