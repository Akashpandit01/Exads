import React from 'react';
import './ContactPage.css';
import RegisterForm from './RegisterForm';
import FindTalentForm from './FindTalentForm';

function ContactPage() {
  const [activeForm, setActiveForm] = React.useState('contact');

  return (
    <div className="contact-container">
      <div className="left-section">
        <h2>Leave us a message</h2>
        <p>Level 2, 35 Clarence Street,<br /> Sydney, NSW, 2000</p>
        <p>company@email.com</p>
        <p>+61 123 456 789</p>
        <iframe
          src="https://maps.google.com/maps?q=35%20Clarence%20Street,%20Sydney&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="250"
          frameBorder="0"
          allowFullScreen
          title="map"
        ></iframe>
      </div>

      <div className="right-section">
        <div className="button-group">
          <button
            className={activeForm === 'contact' ? 'active' : ''}
            onClick={() => setActiveForm('contact')}
          >
            CONTACT US
          </button>
          <button
            className={activeForm === 'talent' ? 'active' : ''}
            onClick={() => setActiveForm('talent')}
          >
            FIND TALENT
          </button>
          <button
            className={activeForm === 'register' ? 'active' : ''}
            onClick={() => setActiveForm('register')}
          >
            REGISTER NOW
          </button>
        </div>

        {activeForm === 'contact' && (
          <form className="simple-form">
            <input type="text" placeholder="Name" />
            <div className="row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        )}

        {activeForm === 'talent' && <FindTalentForm />}
        {activeForm === 'register' && <RegisterForm />}
      </div>
    </div>
  );
}

export default ContactPage;
