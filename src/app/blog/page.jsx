// pages/blog.js
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Blog() {
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
        "Explore practical strategies to improve your website’s user experience and drive more conversions.",
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

  return (
    <>
    <Header/>
      <Head>
        <title>Blog | MySite</title>
        <meta
          name="description"
          content="Read the latest articles, tips, and insights from the MySite team."
        />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-indigo-100">
            Insights, guides, and inspiration for your business and projects.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={post.slug}
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-48 w-full relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}
