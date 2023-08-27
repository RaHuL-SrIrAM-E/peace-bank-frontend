import "../../styles/UserManagement/Footer.css"

const Footer = () => {
    return (
      <div className="footer">
        <div className="top">
          <div>
            <h1>Peace Bank - The Bank of future</h1>
            <p>Enjoy Banking in your Fingertips</p>
          </div>
          <div>
             <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
             </a>
             <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
             </a>
             <a href="/">
              <i className="fa-brands fa-behance-square"></i>
             </a>
             <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
             </a>
          </div>
        </div>
  
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/">ChangeLog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Services</a>
            <a href="/">Privacy</a>
            <a href="/">Policy</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;