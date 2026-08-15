import HomeNavbar from "../components/home/HomeNavbar";
import Footer from "../components/home/Footer";
import Banner from "../components/home/Banner";

const TermsAndPolicy = () => {
  return (
    <>
      <Banner />
      <HomeNavbar />
      <div className="min-h-screen bg-white py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Terms & Privacy Policy
          </h1>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-800">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using our resume builder service, you agree to be
                bound by these Terms and Privacy Policy. If you do not agree,
                please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-800">
                2. Use of Service
              </h2>
              <p>
                Our service is intended for personal, non-commercial use. You may
                use the resume builder to create resumes for yourself or on behalf
                of others. You are responsible for the content you provide.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-800">
                3. Data Collection
              </h2>
              <p>
                We collect personal information such as your name, contact details,
                and work history solely to generate your resume. We do not sell or
                share your personal data with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-800">
                4. Data Security
              </h2>
              <p>
                We implement reasonable measures to protect your data. However, no
                internet-based service is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-800">
                5. Cookies
              </h2>
              <p>
                We use cookies to improve your experience, analyze usage, and
                provide relevant content. You can disable cookies in your browser
                settings, but some features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-800">
                6. Changes to Policy
              </h2>
              <p>
                We may update these terms from time to time. Continued use of the
                service after changes are posted constitutes acceptance of the
                updated terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-800">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about these terms or our privacy
                practices, please contact us through the contact information
                provided on our website.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndPolicy;
