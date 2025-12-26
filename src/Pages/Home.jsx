import Header from "../Components/Header";
import Hero from "../Components/Hero";
import FeaturedProducts from "../Components/FeaturedProducts";
import Testimonials from "../Components/Testimonials";
import HowItWorks from "../Components/HowItWorks";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
