import React from 'react';
import './RegisterForm.css';

function RegisterForm() {
  return (
    <form className="register-form">
      <div className="form-group-row">
        <input type="text" placeholder="First Name *" />
        <input type="text" placeholder="Last Name *" />
      </div>

      <input type="email" placeholder="Your personal email *" />

      <div className="form-group-row">
        <select>
          <option>+91</option>
          {/* Add more country codes if needed */}
        </select>
        <input type="text" placeholder="XXXX XXXX" />
      </div>

      <div className="form-group-row">
        <input type="text" placeholder="Town/City" />
        <select>
          <option>INDIA</option>
          {/* Add more countries if needed */}
        </select>
      </div>

      <input type="text" placeholder="LinkedIn profile URL" />

      <div className="file-upload">
        <label className="browse-btn">BROWSE
          <input type="file" hidden />
        </label>
        <span className="file-info">.doc, .docx, .pdf, .ppt, .pptx</span>
      </div>

      {/* Experience dropdown */}
      <label>Experience</label>
      <select>
        <option value="">Select Experience</option>
        <option value="0">0 Years</option>
        <option value="1">1 Year</option>
        <option value="2">2 Years</option>
        <option value="3">3 Years</option>
        <option value="4">4 Years</option>
        <option value="5">5 Years</option>
      </select>

      <label>Your Key Skills</label>
      <input type="text" placeholder="Example: 'Management', 'Social Media'" />

      <textarea placeholder="Tell us about yourself"></textarea>

      <button type="submit">SEND</button>
    </form>
  );
}

export default RegisterForm;
