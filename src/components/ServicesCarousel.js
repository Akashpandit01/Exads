import React from 'react';
import './ServicesCarousel.css';

function ServicesCarousel() {
  return (
    <div className="carousel-wrapper single-card">
      <h2 className="carousel-title">
        YOU CAN COUNT ON <span className="highlight">US.</span>
      </h2>
      <p className="carousel-subtitle">
        We are committed to providing our customers with excellent services while offering customized solutions for all their needs.
      </p>

      <div className="recruitment-card">
      
        <div className="recruitment-content">
            <b className="h1 text-dark  fs-2 fs-md-3 fs-lg-1 text-uppercase fw-bold">RECRUITMENT & STAFFING</b>
            <br/>
           
          <p className="card-description">
           We help businesses find top talent and build high-performing teams.
Our mission is to bridge the gap between great companies and great professionals.
With a deep understanding of various industries and roles, we specialize in identifying candidates who not only meet the skill requirements but also align with your company’s culture and goals.

Our recruitment process is thorough and result-driven.
We conduct detailed screening, technical assessments, and behavioral interviews to ensure the right fit.
From entry-level positions to executive roles, we provide end-to-end hiring support tailored to your specific needs.
          </p>
        </div>

        <div className="recruitment-image">
          <img
            src="./images/Recruitment.jpg"
            alt="Recruitment & Staffing"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesCarousel;
