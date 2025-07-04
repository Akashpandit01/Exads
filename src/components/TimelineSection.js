import React from "react";
import "./TimelineSection.css";

const TimelineSection = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot">2021</div>
          <div className="timeline-content">
            <h5>Employee Wellness</h5>
            <p>Launched dedicated programs to enhance employee well-being.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot">2018</div>
          <div className="timeline-content">
            <h5>Training & Development</h5>
            <p>Initiated skill development programs for organizational growth.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot">2018</div>
          <div className="timeline-content">
            <h5>Achievement</h5>
            <p>Recognized for delivering exceptional HR services globally.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot">Since 2016</div>
          <div className="timeline-content">
            <h5>HR Outsourcing</h5>
            <p>Expanded into HR Outsourcing and strategic HR consulting.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
