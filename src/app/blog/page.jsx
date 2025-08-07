'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const heroRef = useRef(null);
  const postsRef = useRef(null);

  const posts = [
    {
      title: "How to Build a Next.js App",
      excerpt: "Learn the fundamentals of creating fast, SEO-friendly web apps with Next.js.",
      image: "https://source.unsplash.com/600x400/?code,programming",
      date: "June 30, 2025",
      slug: "/blog/nextjs-app",
      category: "development",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Web Development"]
    },
    {
      title: "UI/UX Tips for Better Conversions",
      excerpt: "Explore practical strategies to improve your website's user experience and drive more conversions.",
      image: "https://source.unsplash.com/600x400/?design,ui",
      date: "June 20, 2025",
      slug: "/blog/ui-ux-tips",
      category: "design",
      readTime: "8 min read",
      tags: ["UI/UX", "Design", "Conversion"]
    },
    {
      title: "SEO Best Practices in 2025",
      excerpt: "Stay ahead of the curve with these essential SEO techniques for the modern web.",
      image: "https://source.unsplash.com/600x400/?seo,search",
      date: "June 10, 2025",
      slug: "/blog/seo-best-practices",
      category: "marketing",
      readTime: "6 min read",
      tags: ["SEO", "Marketing", "Web"]
    },
    {
      title: "Advanced React Patterns",
      excerpt: "Master complex React patterns and improve your component architecture.",
      image: "https://source.unsplash.com/600x400/?react,javascript",
      date: "May 25, 2025",
      slug: "/blog/advanced-react",
      category: "development",
      readTime: "12 min read",
      tags: ["React", "JavaScript", "Patterns"]
    },
    {
      title: "The Future of Web Performance",
      excerpt: "Discover emerging techniques for building lightning-fast web applications.",
      image: "https://source.unsplash.com/600x400/?performance,speed",
      date: "May 15, 2025",
      slug: "/blog/web-performance",
      category: "development",
      readTime: "10 min read",
      tags: ["Performance", "Web", "Optimization"]
    },
    {
      title: "Building Accessible Interfaces",
      excerpt: "Learn how to create inclusive web experiences that work for everyone.",
      image: "https://source.unsplash.com/600x400/?accessibility,inclusive",
      date: "May 5, 2025",
      slug: "/blog/accessibility",
      category: "design",
      readTime: "7 min read",
      tags: ["Accessibility", "Inclusive Design", "UX"]
    }
  ];

  const categories = [
    { value: "all", label: "All Posts" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" }
  ];

  // Filter posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              setIsVisible(true);
            }
            if (entry.target === postsRef.current) {
              // Stagger post animations
              filteredPosts.forEach((_, index) => {
                setTimeout(() => {
                  setVisiblePosts(prev => [...prev, index]);
                }, index * 150);
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (postsRef.current) observer.observe(postsRef.current);

    return () => observer.disconnect();
  }, [filteredPosts.length]);

  // Reset visible posts when filters change
  useEffect(() => {
    setVisiblePosts([]);
    // Re-trigger animations after a short delay
    const timer = setTimeout(() => {
      filteredPosts.forEach((_, index) => {
        setTimeout(() => {
          setVisiblePosts(prev => [...prev, index]);
        }, index * 100);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

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

      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse blur-sm"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-15 rounded-full animate-bounce blur-sm" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse blur-sm" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-60 right-1/3 w-8 h-8 bg-white bg-opacity-20 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className={`text-5xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            Our Blog
          </h1>
          <p className={`text-xl text-indigo-100 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            Insights, guides, and inspiration for your business and projects. Stay updated with the latest trends and best practices.
          </p>

          {/* Enhanced Search Bar */}
          <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-12 text-gray-900 placeholder-gray-500 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border-0 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition-all duration-300"
              />
              <svg 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.value
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Results Counter */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Grid */}
      <section ref={postsRef} className="max-w-6xl mx-auto px-4 py-16 min-h-screen">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <svg className="mx-auto h-24 w-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or category filter.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02] ${
                  visiblePosts.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <a href={post.slug} className="block h-full">
                  {/* Image Container */}
                  <div className="h-48 w-full relative overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 flex-grow mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-md">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    {/* Read More */}
                    <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition-colors duration-300 mt-auto">
                      <span>Read article</span>
                      <svg 
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Get the latest articles and insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            />
            <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-bounce,
          .animate-pulse,
          .animate-ping {
            animation: none;
          }
          
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}