import React, { useState } from 'react';
import './ContactPage.css';
import RegisterForm from '../components/RegisterForm';
import ContactForm from '../components/ContactForm';
import FindTalentForm from '../components/FindTalentForm';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaFacebookF, FaYoutube } from 'react-icons/fa';
   import Footer from '../components/Footer';
function ContactPage() {
  const [activeForm, setActiveForm] = useState('contact');

  return (
    <>
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-overlay">
          <div className="contact-content">
            <h1>Get in touch with us so we can help you</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      {/* Contact Section */}
<div className="contact-section">
  {/* Right Side - Forms */}
  <div className="right-side">
    <div className="form-tabs">
      <button 
        onClick={() => setActiveForm('contact')} 
        className={activeForm === 'contact' ? 'active' : ''}
      >
        CONTACT US
      </button>
      {/* <button 
        onClick={() => setActiveForm('talent')} 
        className={activeForm === 'talent' ? 'active' : ''}
      >
        FIND TALENT
      </button> */}
      {/* <button 
        onClick={() => setActiveForm('register')} 
        className={activeForm === 'register' ? 'active' : ''}
      >
       APPLY NOW
      </button> */}
    </div>

    <div className="form-container">
      {activeForm === 'contact' && <ContactForm />}
      {activeForm === 'talent' && <FindTalentForm />}
      {activeForm === 'register' && <RegisterForm />}
    </div>
  </div>
</div>

     <Footer />
    </>
  );
}

export default ContactPage;
