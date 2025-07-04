import React from "react";
import "./JobCard.css";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaMoneyBillWave } from "react-icons/fa";

const JobCard = ({
  title,
  category,
  location,
  type,
  salary,
  posted,
  description,
//   reward,
  featured,
 
}) => {
  return (
    <div className={`job-card ${featured ? "featured" : ""}`}>
      <div className="job-header">
        {/* <img src={image} alt={title} className="job-image" /> */}
        <div className="job-meta">
          {featured && <span className="featured-badge">⭐ Featured</span>}
          <span className="posted-time">{posted}</span>
        </div>
      </div>
      <div className="job-content">
        <h3>{title}</h3>
        <p className="category">{category}</p>
        <p className="description">{description}</p>
        <div className="job-info">
          <p><FaMapMarkerAlt /> {location}</p>
          <p><FaBriefcase /> {type}</p>
          <p><FaMoneyBillWave /> {salary}</p>
          <p><FaClock /> {posted}</p>
        </div>
        <hr />
        {/* <p className="referral">Referral reward: <strong>{reward}</strong></p> */}
        <div className="card-buttons">
         <a href="./src/Form/Form.html" target="_blank">   <button className="btn read-more">
          
                 Apply
                 
               </button>   
          </a> 

        </div>
      </div>
    </div>
  );
};

export default JobCard;