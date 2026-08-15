import { useState } from "react";
import { Zap } from "lucide-react";
import Title from "./Title";

const Features = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      id="features"
      className="flex flex-col items-center my-10 scroll-mt-12 relative"
    >
      {/* Google Ad - Top Banner */}
      <div className="w-full flex justify-center mb-8 px-4">
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg min-h-[90px] w-full max-w-5xl flex items-center justify-center text-sm text-slate-500 px-4">
          <span className="text-center">📢 Google Ad<br/><span className="text-xs">(top banner)</span></span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
        <Zap width={14} />
        <span>Simple Process</span>
      </div>

      <Title
        title="Build your resume"
        description="Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features."
      />

      <div className="flex flex-col md:flex-row items-center justify-center xl:-mt-10 w-full px-4">
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Features illustration"
        />
        <div
          className="px-4 md:px-0 w-full md:w-auto"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="flex flex-col items-center justify-center gap-4 max-w-md w-full">
            {/* Feature 1 */}
            <div
              className={`w-full p-6 border rounded-xl transition-all duration-300 ${
                !isHover 
                  ? "border-violet-300 bg-violet-100" 
                  : "border-transparent bg-white hover:bg-violet-100 hover:border-violet-300"
              }`}
            >
              <div className="flex gap-4">
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
                  className="size-6 stroke-violet-600 flex-shrink-0"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                </svg>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-slate-700">
                    Real-Time Analytics
                  </h3>
                  <p className="text-sm text-slate-600">
                    Get instant insights into your finances with live dashboards.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="w-full p-6 border border-transparent rounded-xl transition-all duration-300 hover:bg-green-100 hover:border-green-300 bg-white">
              <div className="flex gap-4">
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
                  className="size-6 stroke-green-600 flex-shrink-0"
                >
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                </svg>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-slate-700">
                    Bank-Grade Security
                  </h3>
                  <p className="text-sm text-slate-600">
                    End-to-end encryption, 2FA, compliance with GDPR standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="w-full p-6 border border-transparent rounded-xl transition-all duration-300 hover:bg-orange-100 hover:border-orange-300 bg-white">
              <div className="flex gap-4">
                <svg
                  className="size-6 stroke-orange-600 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 15V3" />
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                </svg>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-slate-700">
                    Customizable Reports
                  </h3>
                  <p className="text-sm text-slate-600">
                    Export professional, audit-ready financial reports for tax or
                    internal review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Features;