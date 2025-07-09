import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/3.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        url="/"
        btn="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
