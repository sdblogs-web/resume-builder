import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white pb-12 sm:pb-16 lg:pb-20">
      <HomeNavbar />

      {/* ================= HERO WRAPPER ================= */}
      <main className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {/* Green Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-32 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-green-300/30 blur-[80px] sm:h-72 sm:w-72 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px] lg:blur-[110px]" />

        {/* ================= LEFT AD DESKTOP ================= */}
        <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 xl:block 2xl:left-4">
          <div className="flex min-h-[280px] w-[120px] items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-2 text-sm text-slate-500 shadow-lg backdrop-blur-sm 2xl:w-[150px]">
            <span className="text-center">
              📢 Google Ad
              <br />
              <span className="text-xs">(left)</span>
            </span>
          </div>
        </div>

        {/* ================= HERO CONTENT ================= */}
        <section className="flex w-full max-w-5xl flex-col items-center text-center">
          {/* Rating */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 lg:mt-12">
            {/* Avatars */}
            <div className="flex -space-x-2 sm:-space-x-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="User"
                className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
              />

              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="User"
                className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
              />

              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="User"
                className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
              />

              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="User"
                className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
              />

              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="User"
                className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
              />
            </div>

            {/* Stars + Text */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-green-600"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                ))}
              </div>

              <p className="text-xs text-gray-700 sm:text-sm">
                Used by 10,000+ users
              </p>
            </div>
          </div>

          {/* ================= HEADING ================= */}
          <h1
            className="
              mt-6
              max-w-5xl
              text-center
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-slate-900
              sm:mt-7
              sm:text-5xl
              md:text-6xl
              md:leading-[1.15]
              lg:mt-8
              lg:text-7xl
              xl:text-[72px]
            "
          >
            Land your dream job with{" "}
            <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
              AI-powered
            </span>{" "}
            resumes.
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
            Create, edit and download professional resumes with AI-powered
            assistance.
          </p>

          {/* ================= CTA ================= */}
          <div className="mt-7 flex w-full justify-center sm:mt-8">
            <Link
              to="/app"
              className="
                flex
                h-11
                items-center
                justify-center
                gap-1
                rounded-full
                bg-green-500
                px-7
                text-sm
                font-medium
                text-white
                ring-1
                ring-green-400
                ring-offset-2
                transition-all
                hover:bg-green-600
                active:scale-95
                sm:h-12
                sm:px-9
                sm:text-base
              "
            >
              Get started

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ================= MOBILE/TABLET ADS ================= */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 xl:hidden">
          {/* Left Ad */}
          <div className="flex min-h-[100px] w-full items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-3 text-sm text-slate-500 shadow-md backdrop-blur-sm sm:min-h-[120px]">
            <span className="text-center">
              📢 Google Ad
              <br />
              <span className="text-xs">(left)</span>
            </span>
          </div>

          {/* Right Ad */}
          <div className="flex min-h-[100px] w-full items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-3 text-sm text-slate-500 shadow-md backdrop-blur-sm sm:min-h-[120px]">
            <span className="text-center">
              📢 Google Ad
              <br />
              <span className="text-xs">(right)</span>
            </span>
          </div>
        </div>

        {/* ================= RIGHT AD DESKTOP ================= */}
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 xl:block 2xl:right-4">
          <div className="flex min-h-[280px] w-[120px] items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-2 text-sm text-slate-500 shadow-lg backdrop-blur-sm 2xl:w-[150px]">
            <span className="text-center">
              📢 Google Ad
              <br />
              <span className="text-xs">(right)</span>
            </span>
          </div>
        </div>
      </main>

      {/* ================= FONT ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Hero;
