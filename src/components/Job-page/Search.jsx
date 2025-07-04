import React from 'react';
import './Search.css';
import { FaFilter, FaSearch, FaUserCheck, FaBell, FaUserPlus } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="search-bar-container">
      {/* <button className="filter-button" >
        <FaFilter className="icon"  />
        FILTERS
      </button> */}

      <input
        type="text"
        placeholder="Search by keyword..."
        className="search-input"
      />

      <button className="search-icon-button ">
        <FaSearch />
      </button>

      <div className="action-buttons w-5">
        <button className="action-button d-flex justify-content-center align-items-center" >
          <FaUserCheck className="icon" />
          REFER 
        </button>
        {/* <button className="action-button d-flex justify-content-center align-items-center">
          <FaBell className="icon" />
          CREATE JOB ALERT
        </button> */}
        <button className="action-button d-flex justify-content-center align-items-center">
          <FaUserPlus className="icon" />
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Search;