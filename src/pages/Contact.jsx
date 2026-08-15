import HomeNavbar from "../components/home/HomeNavbar";
import Footer from "../components/home/Footer";
import Banner from "../components/home/Banner";

const Contact = () => {
  return (
    <>
      <Banner />
      <HomeNavbar />
      <div className="min-h-screen bg-white py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Contact Us
          </h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-center">
              Have questions or feedback? We would love to hear from you.
            </p>

            <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
              <p className="text-lg font-semibold text-slate-800">Email</p>
              <a
                href="mailto:sdblogs743348@gmail.com"
                className="text-green-600 hover:underline"
              >
                sdblogs743348@gmail.com
              </a>
            </div>

            <p className="text-center text-sm text-slate-500">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
