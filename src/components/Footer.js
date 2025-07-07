<<<<<<< HEAD
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
=======
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
>>>>>>> 1639089 (changes)
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
<<<<<<< HEAD
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
=======
  FaInstagram,
} from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';
>>>>>>> 1639089 (changes)

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5 text-white">
          {/* Logo & Tagline */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <img
              src="/images/logo.jpeg"
              alt="Enlace Solutions"
              className="footer-logo mb-2"
            />
            <p>Transforming organisations with HR expertise</p>
<<<<<<< HEAD
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
=======
            <div className="footer-social-icons">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{display:"inline-block",marginRight:"15px"}}
              >
                <FaLinkedin size={36} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{display:"inline-block",marginRight:"15px"}}
              >
                <FaInstagram size={36} />
              </a>
            </div>
>>>>>>> 1639089 (changes)
          </Col>

          {/* Explore Links */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading">EXPLORE</h5>
            <ul className="footer-links">
<<<<<<< HEAD
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/What-We-Do">What We Do</Link>
              </li>
              <li>
                <Link to="/candidate">Candidate</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
=======
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/What-We-Do">What We Do</Link></li>
              <li><Link to="/candidate">Candidate</Link></li>
              <li><Link to="/who-we-help">Jobs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
>>>>>>> 1639089 (changes)
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 className="footer-heading">CONTACT</h5>
            <ul className="footer-contact">
<<<<<<< HEAD
              <li>
                <FaMapMarkerAlt /> 603, Shriram chandrama hsg society, near
                Renault showroom, Baner highway side road,Baner,Pune-411045
              </li>
              <li>
                <FaPhoneAlt /> 9270401369
              </li>
              <li>
                <FaEnvelope /> mindcraftershrpartner@gmail.com
              </li>
=======
              <li><FaMapMarkerAlt /> 603, Shriram Chandrama HSG Society, near Renault showroom, Baner highway side road, Baner, Pune-411045</li>
              <li><FaPhoneAlt /> +91 927-040-1369</li>
              <li><FaEnvelope /> mindcraftershrpartner@gmail.com</li>
>>>>>>> 1639089 (changes)
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <div className="text-center text-white mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Cortica Web Solutions. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
