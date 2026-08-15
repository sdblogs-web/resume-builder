import Banner from "../components/home/Banner";
import CallToAction from "../components/home/CallToAction";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Testimonial from "../components/home/Testimonial";
import GoogleAd from "../components/GoogleAd";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <GoogleAd
          clientId="ca-pub-XXXXXXXXXXXXXXXX"
          slot="1234567890"
          className="mb-8"
        />
      </div>
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
