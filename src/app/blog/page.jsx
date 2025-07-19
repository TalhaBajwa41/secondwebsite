'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState([]);

  const posts = [
    {
      title: "How to Build a Next.js App",
      excerpt:
        "Learn the fundamentals of creating fast, SEO-friendly web apps with Next.js.",
      image: "https://source.unsplash.com/600x400/?code,programming",
      date: "June 30, 2025",
      slug: "/blog/nextjs-app",
    },
    {
      title: "UI/UX Tips for Better Conversions",
      excerpt:
        "Explore practical strategies to improve your website's user experience and drive more conversions.",
      image: "https://source.unsplash.com/600x400/?design,ui",
      date: "June 20, 2025",
      slug: "/blog/ui-ux-tips",
    },
    {
      title: "SEO Best Practices in 2025",
      excerpt:
        "Stay ahead of the curve with these essential SEO techniques for the modern web.",
      image: "https://source.unsplash.com/600x400/?seo,search",
      date: "June 10, 2025",
      slug: "/blog/seo-best-practices",
    },
  ];

  useEffect(() => {
    // Trigger hero animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Stagger blog post animations
    posts.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePosts(prev => [...prev, index]);
      }, 500 + (index * 200));
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <Head>
        <title>Blog | MySite</title>
        <meta
          name="description"
          content="Read the latest articles, tips, and insights from the MySite team."
        />
      </Head>

      {/* Hero Section with Animations */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            Our Blog
          </h1>
          <p className={`text-lg text-indigo-100 transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            Insights, guides, and inspiration for your business and projects.
          </p>
        </div>
      </section>

      {/* Blog Grid with Staggered Animations */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <a
              key={post.slug}
              href={post.slug}
              className={`group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                visiblePosts.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="h-48 w-full relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2 transform group-hover:text-indigo-500 transition-colors duration-300">
                  {post.date}
                </p>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {post.excerpt}
                </p>
                
                {/* Animated Read More Indicator */}
                <div className="mt-4 flex items-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <span className="text-sm font-medium">Read more</span>
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Animated Footer */}
      <div className="transform transition-all duration-1000 delay-1000">
        <Footer />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}