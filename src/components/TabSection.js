import React, { useState, useEffect } from "react";
import "./TabSection.css";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "mission":
        return (
          <p className={`mt-4 text-white ${fade ? "fade-in" : ""}`}>
            Our mission is to transform and evolve HR practices through technology, operational excellence, and strategic insights to help clients reach their full potential.
          </p>
        );
      case "vision":
        return (
          <p className={`mt-4 text-white ${fade ? "fade-in" : ""}`}>
            We aim to be recognized as the Gold Standard in HR consulting, uniting our team under the mission of delivering industry-leading solutions.
          </p>
        );
      case "history":
        return (
          <p className={`mt-4 text-white ${fade ? "fade-in" : ""}`}>
            Enlace Solutions was founded to provide top talent and reliable HR services. We've grown through expertise in HRMS, wellness, and strategic advisory services.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="btn-group">
        <button
          className={`btn fw-bold ${activeTab === "mission" ? "btn-warning text-black" : "btn-dark text-white"}`}
          onClick={() => setActiveTab("mission")}
        >
          MISSION
        </button>
        <button
          className={`btn fw-bold ${activeTab === "vision" ? "btn-warning text-black" : "btn-dark text-white"}`}
          onClick={() => setActiveTab("vision")}
        >
          VISION
        </button>
        <button
          className={`btn fw-bold ${activeTab === "history" ? "btn-warning text-black" : "btn-dark text-white"}`}
          onClick={() => setActiveTab("history")}
        >
          HISTORY
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default TabSection;
