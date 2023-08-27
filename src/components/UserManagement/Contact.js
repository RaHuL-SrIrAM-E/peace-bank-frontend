import Hero from "./Hero";
import Navbar from "./NavBar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
       <Hero 
       cName="hero-mid" 
       heroImg="https://www.alttabgs.com/wp-content/uploads/2017/01/contact_background_form.jpg"
       title="Contact"
       btnClass="hide" 
       />
       <Footer />
    </>
  );
}

export default Contact;