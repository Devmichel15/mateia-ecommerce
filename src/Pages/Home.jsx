import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import FeaturedProducts from "../Components/FeaturedProducts";
import AboutUs from "../Components/AboutUs";
import WhyMateia from "../Components/WhyMateia";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-angola-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Category />
        <FeaturedProducts />
        <AboutUs />
        <WhyMateia />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
