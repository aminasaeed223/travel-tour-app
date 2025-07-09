import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactComponent from "../components/Contact";

function Contactpage() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        url="/"
        btn="hide"
      />
      <ContactComponent />
      <Footer />
    </>
  );
}
export default Contactpage;
