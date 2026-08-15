import { Link } from "react-router-dom";
import HomeNavbar from "../components/home/HomeNavbar";
import Footer from "../components/home/Footer";
import Banner from "../components/home/Banner";

const blogs = [
  {
    id: 1,
    title: "How to Write a Resume That Gets Noticed",
    excerpt:
      "Learn how to write a resume that gets noticed by recruiters, passes ATS filters, and proves your value with strong achievements, clear formatting, and targeted keywords.",
    date: "Aug 10, 2026",
    readTime: "9 min read",
  },
  {
    id: 2,
    title: "Top 10 Skills to Include in 2026",
    excerpt:
      "Explore the most valuable resume skills for 2026, from AI literacy and data analysis to communication and leadership, so your profile matches employer demand.",
    date: "Aug 5, 2026",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Power of AI in Resume Building",
    excerpt:
      "Discover how AI resume tools can improve wording, optimize keywords, and help job seekers build stronger applications without losing their personal voice.",
    date: "Jul 28, 2026",
    readTime: "9 min read",
  },
  {
    id: 4,
    title: "Common Resume Mistakes to Avoid",
    excerpt:
      "Avoid the resume mistakes that stop candidates from getting interviews, including weak bullets, poor formatting, vague achievements, and generic wording.",
    date: "Jul 20, 2026",
    readTime: "8 min read",
  },
];

const Blog = () => {
  return (
    <>
      <Banner />
      <HomeNavbar />
      <div className="min-h-screen bg-white py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-10 text-center text-3xl font-bold text-slate-900">
            Blog
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md block"
              >
                <h2 className="mb-2 text-lg font-semibold text-slate-800">
                  {blog.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
