// NavbarComponent.js
import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm'; // make sure this path is correct
import './NavbarComponent.css';
import LoginForm from './LoginForm';

function NavbarComponent() {
  const [showRegister, setShowRegister] = useState(false);
const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.custom-navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarCollapseRef = useRef(null);
  const handleNavLinkClick = () => {
    const bsCollapse = new window.bootstrap.Collapse(navbarCollapseRef.current, {
      toggle: false
    });
    bsCollapse.hide();
  };

  return (
    <>
      <Navbar sticky='top' expand="lg" variant="dark" className="custom-navbar" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/images/logo.jpeg" alt="Mindcrafters Logo" className="navbar-logo" />
            <div className="brand-text ms-2">
              <div className="brand-title">Mindcrafters</div>
              <div className="brand-subtitle">HR Partner</div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse ref={navbarCollapseRef}>
            <Nav className="ms-auto text-uppercase">
              <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleNavLinkClick}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/What-We-Do" onClick={handleNavLinkClick}>What We Do</Nav.Link>
              <Nav.Link as={Link} to="/candidate" onClick={handleNavLinkClick}>Candidate</Nav.Link>
              <Nav.Link as={Link} to="/jobs" onClick={handleNavLinkClick}>Jobs</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>Contact Us</Nav.Link>

              {/* Button triggers modal */}
              <Nav.Link as="span" onClick={() => setShowRegister(true)} style={{ cursor: 'pointer' }}>
                <span className="btn btn-outline-light navbar-small-btn">Register</span>
              </Nav.Link>
              <Nav.Link as="span" onClick={() => setShowLogin(true)} style={{ cursor: 'pointer' }}>
   <span className="btn btn-outline-light navbar-small-btn">Log In</span>
  </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Registration */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
      </Modal>


      {/* Login Modal */}
<Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
  <Modal.Header closeButton>
    <Modal.Title>Log In</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <LoginForm />
  </Modal.Body>
</Modal>

    </>
  );
}

export default NavbarComponent;
