import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div>
      {/* Google Ad - Top of CTA section */}
      <div className="w-full flex justify-center mb-8 px-4">
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg min-h-[90px] w-full max-w-5xl flex items-center justify-center text-sm text-slate-500 px-4">
          <span className="text-center">📢 Google Ad<br/><span className="text-xs">(top banner)</span></span>
        </div>
      </div>

      <div
        id="cta"
        className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-10 sm:px-16 mt-8"
      >
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">
          <p className="text-xl font-medium max-w-md text-slate-800">
            Build a Professional Resume That Helps You Stand Out and Get Hired
          </p>
          <Link
            to="/app?state=register"
            className="flex items-center gap-2 rounded py-3 px-8 bg-green-600 hover:bg-green-700 transition text-white"
          >
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Google Ad - Bottom of CTA section */}
      <div className="w-full flex justify-center mt-12 px-4">
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg min-h-[90px] w-full max-w-5xl flex items-center justify-center text-sm text-slate-500 px-4">
          <span className="text-center">📢 Google Ad<br/><span className="text-xs">(bottom banner)</span></span>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;