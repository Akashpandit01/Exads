import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5 text-white">
          {/* Logo & Tagline */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <img src="/images/logo.jpeg" alt="Enlace Solutions" className="footer-logo mb-2" />
            <p>Transforming organisations with HR expertise</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </Col>

          {/* Explore Links */}
          <Col md={4} className="mb-4 mb-md-0">
           <h5 className="footer-heading">EXPLORE</h5>
<ul className="footer-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/What-We-Do">What We Do</Link></li>
  <li><Link to="/candidate">Candidate</Link></li>
  <li><Link to="/who-we-help">Jobs</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>
 
</ul>

          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 className="footer-heading">CONTACT</h5>
            <ul className="footer-contact">
              <li><FaMapMarkerAlt /> 603, Shriram chandrama hsg society, near Renault showroom, Baner highway side road,Baner,Pune-411045</li>
              <li><FaPhoneAlt />  9270401369</li>
              <li><FaEnvelope /> mindcraftershrpartner@gmail.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
