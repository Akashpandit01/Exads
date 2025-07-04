// import React from 'react'

// const TeamSection = () => {
//   return (

import React from "react";
import bkh from "../../assets/bkh.jpg";
import "./TeamSection.css";

function TeamSection() {
  return (
    
  <section className="about-head">

       
        <div className="content">
          <h5>Meet Our Head</h5>
          <h2>Hr.& Placement Head</h2>
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
         <div className="abt-image">
          <img src={bkh} alt="Graduates" />
          {/* <div className="play-button">▶</div> */}
        </div>

      </section>
      


   
  );
}

export default TeamSection;

//   )
// }

// export default TeamSection