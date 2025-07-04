// src/components/NavbarComponent.js
import React, { useEffect,useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';


function NavbarComponent() {

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
    bsCollapse.hide(); // manually hide the navbar
  };




  return (
    <Navbar sticky='top' expand="lg" variant="dark" className="custom-navbar" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
  <img
    src="/images/logo.jpeg"
    alt="Mindcrafters Logo"
    className="navbar-logo"
  />
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
            <Nav.Link as={Link} to="/candidate" onClick={handleNavLinkClick}>CANDIDATE</Nav.Link>
            <Nav.Link as={Link} to="/jobs" onClick={handleNavLinkClick}>JOBS</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
