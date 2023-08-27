import Footer from "./Footer";
import Navbar from "./NavBar";
import Hero from "./Hero";
import Contact from "./Contact";
import UserLogin from "./Login";

import "../../styles/UserManagement/HomePage.css"

function Home() {
  return (
    <>
       <Navbar />
       <Hero 
       cName="hero" 
       heroImg="https://getwallpapers.com/wallpaper/full/d/7/1/328129.jpg"
       title="Welcome!!!"
       text="Greetings!!!, Glad to be at your service."
       url="/"
       />
       <UserLogin />
       <Contact />
       
       <Footer />
    </>
  );
}

export default Home;