import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="relative z-50 mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <Link to="/" className="shrink-0">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-9 w-auto sm:h-10 md:h-11"
          />
        </Link>

        <div className="hidden items-center gap-5 text-sm text-slate-800 md:flex lg:gap-8">
          <Link to="/" className="transition-colors hover:text-green-600">
            Home
          </Link>

          <a href="/#features" className="transition-colors hover:text-green-600">
            Features
          </a>

          <a href="/#testimonials" className="transition-colors hover:text-green-600">
            Testimonials
          </a>

          <Link to="/blog" className="transition-colors hover:text-green-600">
            Blogs
          </Link>

          <Link to="/contact" className="transition-colors hover:text-green-600">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {!user && (
            <>
              <Link
                to="/app?state=register"
                className="rounded-full bg-green-500 px-5 py-2 text-sm text-white transition-all hover:bg-green-700 active:scale-95 lg:px-6"
              >
                Get started
              </Link>

              <Link
                to="/app?state=login"
                className="rounded-full border border-slate-200 px-5 py-2 text-sm text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-95 lg:px-6"
              >
                Login
              </Link>
            </>
          )}

          {user && (
            <Link
              to="/app"
              className="rounded-full bg-green-500 px-6 py-2 text-sm text-white transition-all hover:bg-green-700 active:scale-95"
            >
              Dashboard
            </Link>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 transition hover:bg-slate-100 active:scale-90 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center gap-8 bg-black/60 px-6 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-full opacity-0"
        }`}
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-white"
        >
          Home
        </Link>

        <a
          href="/#features"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-white"
        >
          Features
        </a>

        <a
          href="/#testimonials"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-white"
        >
          Testimonials
        </a>

        <Link
          to="/blog"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-white"
        >
          Blogs
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-medium text-white"
        >
          Contact
        </Link>

        <div className="mt-2 flex flex-col gap-3">
          {!user ? (
            <>
              <Link
                to="/app?state=register"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-green-500 px-8 py-3 text-center text-white"
              >
                Get started
              </Link>

              <Link
                to="/app?state=login"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-white/40 px-8 py-3 text-center text-white"
              >
                Login
              </Link>
            </>
          ) : (
            <Link
              to="/app"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-green-500 px-8 py-3 text-center text-white"
            >
              Dashboard
            </Link>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-lg font-semibold text-white transition hover:bg-green-700"
        >
          ✕
        </button>
      </div>
    </>
  );
};

export default HomeNavbar;
