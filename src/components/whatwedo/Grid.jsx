import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Grid.css";


export const Grid = () => {
  return (
    <div className="Grid1 container-fluid d-flex justify-content-evenly align-items-start p-0 pt-5  flex-wrap gap-5">
      <div className="container-fluid py-5 d-flex justify-content-center align-items-center flex-wrap bg-transparent gap-5">

        
        {/* First Card
        <div className="card shadow-lg m-3 p-2" style={{ maxWidth: "500px", transform: 'translateY(-40px)' }}>
          <img
            src="/images/logo.jpeg"
            className="card-img-top mb-2"
            alt="HR Outsourcing"
          />
          <div className="card-body bg-white">
            <h1 className="card-title text-dark fw-bold ">Less Admin. More Impact.</h1>
            <h5 className="card-text text-secondary mt-3">
              "Free up your time and reduce costs with expert HR outsourcing tailored to your growth."
            </h5>
          </div>
        </div>

        {/* Second Card */}
        {/* <div className="card shadow-lg m-3" style={{ maxWidth: "500px", transform: 'translateY(40px)' }}>
          <img
            src={"../../assets/HR2.jpg"}
            className="card-img-top"
            alt="Recruitment"
          />
          <div className="card-body bg-white">
            <h1 className="card-title text-dark fw-bold">Right Talent. Real Results.</h1>
            <h5 className="card-text text-secondary mt-3">
              "Streamline your hiring with top-notch recruitment services tailored for long-term success."
            </h5>
          </div>
        </div>  */}

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
  );
};