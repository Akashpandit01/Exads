import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {FaGlobe, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5 text-white ">
          {/* Logo & Tagline */}
    <Col md={4} className="footer-brand text-center d-flex flex-column align-items-center mb-4 mb-md-0">
  <img src="/images/logo.jpeg" alt="Enlace Solutions" className="footer-logo mb-2" />
  <p className="footer-tagline">Transforming organisations with HR expertise</p>
  <div className="footer-social-icons d-flex justify-content-center">
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkd">
      <FaLinkedin />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon ins">
      <FaInstagram />
    </a>
  </div>
</Col>


          {/* Explore Links */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading">EXPLORE</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/What-We-Do">What We Do</Link></li>
              <li><Link to="/candidate">Candidate</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 className="footer-heading">CONTACT</h5>
            <ul className="footer-contact">
              <li >
                <a href="https://maps.app.goo.gl/sUnQMGYfQSxhRZV17" target="_blank" class="Anchor_of_Footer Footer-List111"><FaMapMarkerAlt /> 603, Shriram chandrama hsg society, near Renault showroom,
                Baner highway side road, Baner, Pune-411045</a>
              </li>
              <li><FaPhoneAlt /> 9270401369</li>
              <li><FaEnvelope /> mindcraftershrpartner@gmail.com</li>
              <li><FaGlobe /><a href="https://mindcraftershrpartner.com/" class="Anchor_of_Footer Footer-List111" target="_blank" style={{textDecoration:"none"}}>www.mindcraftershrparter.com</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider" />
{/* 
        <div className="text-center text-white mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Cortica Web Solutions. All rights reserved.
          </p>
        </div> */}
      </Container>

      {/* COPYRIGHT SECTION */}
      <div className="footer-bottom text-center text-white py-3">
        © {new Date().getFullYear()} Cortica Web Solutions pvt.ltd . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
