import HomeNavbar from "../components/home/HomeNavbar";
import Footer from "../components/home/Footer";
import Banner from "../components/home/Banner";

const About = () => {
  return (
    <>
      <Banner />
      <HomeNavbar />
      <div className="min-h-screen bg-white py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-slate-900">
            About Me
          </h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              I am a passionate developer dedicated to building simple and useful
              tools that help people succeed. This resume builder was created to
              make professional resume creation fast, easy, and accessible to
              everyone.
            </p>
            <p>
              With a focus on clean design and user experience, the goal is to
              help job seekers present their best selves without the hassle of
              complicated software.
            </p>
            <p>
              Thank you for using this platform. Your feedback and support mean a
              lot.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
