import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Grid.css";
import HR from "../../assets/HR.jpg";
import HR2 from "../../assets/HR2.jpg";

export const Grid = () => {
  return (
    <>
      <div className="Grid1 container-fluid d-flex justify-content-evenly align-items-start p-0 pt-5  flex-wrap gap-5">
        <div className="container-fluid py-5 d-flex justify-content-center align-items-start flex-wrap gap-4 card-section-bg">
          {/* First Card */}
          <div className="custom-card m-3 ">
            <img src={HR} className="custom-card-img" alt="HR Outsourcing" />
            <div className="custom-card-body ">
              <h1 className="custom-card-title">
                Understanding the client’s needs
              </h1>
              <h5 className="custom-card-text">
                "Mindcrafters focuses on gathering detailed information about
                the role, the required skills and experience, the company
                culture, and the overall hiring process. Beyond the job
                description, it's crucial to understand the client's business
                challenges, goals, and desired candidate profile. We believe in
                regular communication, adaptability, and a proactive approach
                are key to building a strong client relationship and delivering
                successful placements."
              </h5>
            </div>
          </div>

          {/* Second Card */}
          <div className="custom-card m-3">
            <img src={HR2} className="custom-card-img" alt="Recruitment" />
            <div className="custom-card-body">
              <h1 className="custom-card-title">
                Data Repository and Research Approach.
              </h1>
              <h5 className="custom-card-text">
                "We have well-defined database and research strategy to
                efficiently source, track, and manage candidates. This involves
                utilizing a robust database system, maintaining data quality,
                and implementing effective research methods to identify and
                engage with both active and passive talent."
              </h5>
            </div>
          </div>

          <div className="custom-card m-3">
            <img src={HR2} className="custom-card-img" alt="Recruitment" />
            <div className="custom-card-body">
              <h1 className="custom-card-title">
                Seamless Integration for Smarter Hiring.
              </h1>
              <h5 className="custom-card-text">
                "We maintain clear and consistent communication with both our clients and the selected candidates throughout the transition period—and beyond, if needed. Our goal is to ensure a smooth onboarding experience and successful cultural integration. By staying engaged during this critical phase, we foster confidence and create the foundation for long-term success between the candidate and the organization. Our continued involvement demonstrates our commitment to delivering not just placements—but partnerships that thrive."
              </h5>
            </div>
          </div>


          <div className="custom-card m-3">
            <img src={HR2} className="custom-card-img" alt="Recruitment" />
            <div className="custom-card-body">
              <h1 className="custom-card-title">
                Beyond Recruitment: Supporting Seamless Transitions.
              </h1>
              <h5 className="custom-card-text">
                "We go far beyond simply filling roles—we actively support the journey that follows. By facilitating open, ongoing communication between the client and the chosen candidate, we help both parties align expectations and navigate the initial adjustment period. Whether it’s assisting with onboarding, cultural fit, or role clarity, our involvement continues for as long as the client requires. This hands-on support ensures not only a smooth transition but also sets the stage for a lasting and productive relationship."
              </h5>
            </div>
          </div>




        </div>

        

        <div
          id="container_fluid_of_Grid"
          className="container-fluid d-flex justify-content-center m-0 mb-5 align-items-center flex-wrap gap-4"
        >
          <h1 id="h1_of_Grid" className="h1 text-center">
            We Are Ready To Bring Bigger & Stronger Projects
          </h1>

          {/* ✅ Replace <a> with <Link> */}
          <Link
            id="button_of_Grid"
            type="button"
            className="btn btn-outline-light"
            to="/"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};
