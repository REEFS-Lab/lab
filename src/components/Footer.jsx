import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 ">

          </div>
          <div className="footer-content pt-5 pb-1">
            <div className="footer-logo">
              <img src={logo} className="img-fluid" alt="logo" />
            </div>
            <div className="footer-text">
              <p>REEFS Lab <br />
                Indian Institute of Technology Gandhinagar,<br />
                Palaj, Gandhinagar, Gujarat, PIN - 382355. </p>
            </div>
            <div className=''>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              {/* <a href="#" class="fa fa-google"></a> */}
            </div>

            {/* <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </div>
                  <div className="footer-text">
                    <p>Energy & Climate Lab <br />Indian Institute of Technology Gandhinagar, Palaj, Gandhinagar, Gujarat, PIN - 382355. </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                    <li><a href='https://iitgn.ac.in/' target="_blank" rel="noreferrer">IITGN</a></li>
                    <li><Link to="/people" onClick={() => window.scrollTo(0, 0)}>People</Link></li>
                    <li><Link to="/publications" onClick={() => window.scrollTo(0, 0)}>Publications</Link></li>
                    <li><Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link></li>
                    <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact us</Link></li>
                  </ul>
                </div>
              </div>
              
            </div> */}
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">

            <div className="copyright-text">
              <p>Copyright &copy; 2023, All Right Reserved <Link to="/" onClick={() => window.scrollTo(0, 0)}>REEFS Lab</Link></p>
            </div>
          </div>


        </div>
      </footer>
    </div>
  )
}

export default Footer