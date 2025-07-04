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
            <h1 className="card-title">RECRUITMENT & STAFFING</h1>
          <p className="card-description">
            We help businesses find top talent and build high-performing teams. Our recruitment services ensure the right fit through rigorous screening, while our staffing solutions offer flexible workforce support to meet dynamic business needs.
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
