import React, { useState } from 'react';
import './FilterSidebar.css';
import { FaFilter, FaTimes } from 'react-icons/fa';

function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="filter-toggle" onClick={toggleSidebar}>
        <FaFilter /> Filters
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h4>Filters</h4>
          <FaTimes className="close-icon" onClick={toggleSidebar} />
        </div>

        <div className="sidebar-content">
          <h5>Category</h5>
          <label><input type="checkbox" /> Admin / Secretarial / Office Support</label>
          <label className="sub"><input type="checkbox" /> Administration</label>
          <label><input type="checkbox" /> Advertising / Media / Publishing</label>
          <label><input type="checkbox" /> IT & Telecomms</label>

          <h5>Location</h5>
          <label><input type="checkbox" /> Sydney</label>
          <label><input type="checkbox" /> Perth</label>

          <h5>Work Type</h5>
          <label><input type="checkbox" /> Contract or Temp</label>
          <label><input type="checkbox" /> Permanent / Full Time</label>

          <h5>Salary</h5>
          <div className="salary-range">
            <input type="text" placeholder="From A$" />
            <input type="text" placeholder="To A$" />
          </div>
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default FilterSidebar;
