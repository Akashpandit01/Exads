import React from 'react';
import './AboutUspage.css';
import aboutImg from '../../assets/aboutImg.jpg'

const AboutUspage = () => {
  return (
    <section className="about-university">
      <div className="about-image">
        <img src={aboutImg} alt="Graduates" />
        {/* <div className="play-button">▶</div> */}
      </div>
      <div className="about-content">
        <h5>ABOUT Us</h5>
        <h2>Bridging the Gap Between Talent  <br /> & Industry Needs</h2>
        <p>
          Embark on a transformative educational journey with our university's comprehensive education programs.
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed
          to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators
          to make a meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs
          offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        </p>
      </div>
    </section>
  );
};

export default AboutUspage;