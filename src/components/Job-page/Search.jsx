import React from 'react';
import './Search.css';
import { FaFilter, FaSearch, FaUserCheck, FaBell, FaUserPlus } from 'react-icons/fa';

const Search = () => {
  const handleReferClick = () => {
    const homeUrl = `${window.location.origin}/`; // points to Home page of your app

    if (navigator.share) {
      navigator
        .share({
          title: 'Refer a Friend',
          text: 'Check out this job portal!',
          url: homeUrl,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(homeUrl).then(() => {
        alert('Home page link copied to clipboard!');
      });
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by keyword..."
        className="search-input"
      />

      <button className="search-icon-button">
        <FaSearch />
      </button>

      <div className="action-buttons w-5">
        <button
          className="action-button d-flex justify-content-center align-items-center"
          onClick={handleReferClick}
        >
          <FaUserCheck className="icon" />
          REFER
        </button>

        <button className="action-button d-flex justify-content-center align-items-center">
          <FaUserPlus className="icon" />
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Search;
