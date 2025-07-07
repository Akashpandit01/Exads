import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QualitySection.css"; // for custom styles
import { FaCheck } from "react-icons/fa";

const QualitySection = () => {
  return (
    <div className="container-fluid bg-dark text-white py-5">
      <div className="row align-items-center">
        
        {/* Left Column */}
        <div className="col-md-6 mb-4">
          <div className="highlight-box text-center mb-4">
            <h4>WE'RE COMMITTED TO DELIVER HIGH QUALITY RESULTS.</h4>
          </div>

          <div className="quality-list">
            <div className="quality-item d-flex align-items-center mb-3">
              <div className="circle-number">01</div>
              <p className="mb-0 ms-3">Effective cost</p>
            </div>
            <hr className="divider" />

            <div className="quality-item d-flex align-items-center mb-3">
              <div className="circle-number">02</div>
              <p className="mb-0 ms-3">Quality Candidate</p>
            </div>
            <hr className="divider" />

            <div className="quality-item d-flex align-items-center mb-3">
              <div className="circle-number">03</div>
              <p className="mb-0 ms-3">Best industry Practices</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <p className="mb-4">
            Our completely customized recruitment services are designed to address your company's specific needs, 
            implementing those initiatives that will bring you extra time as well as the greatest return 
            on your investment.
          </p>

          <div className="d-flex align-items-start mb-3">
            <img 
              src="/images/img.jpeg" 
              alt="team" 
              className="me-3 img-fluid rounded"
            />
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-start mb-2">
                <FaCheck className="text-warning me-2 mt-1" />
                <span>Mindcrafters HR PARTNERS is reputed for delivering quality well ahead of time.</span>
              </li>
              <li className="d-flex align-items-start">
                <FaCheck className="text-warning me-2 mt-1" />
                <span>By using experience, we have built a tried and tested recruitment process that includes cutting-edge methodologies.</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
