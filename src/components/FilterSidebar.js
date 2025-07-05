// import React, { useState } from 'react';
// import './FilterSidebar.css';
// import { FaFilter, FaTimes } from 'react-icons/fa';

// function FilterSidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button className="filter-toggle" onClick={toggleSidebar}>
//         <FaFilter /> Filters
//       </button>

//       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <h4>Filters</h4>
//           <FaTimes className="close-icon" onClick={toggleSidebar} />
//         </div>

//         <div className="sidebar-content">
//           <h5>Job Category</h5>
//           <label><input type="checkbox" /> Information Technology (IT)</label>
//           <div className="sub-category">
//             <label className="sub"><input type="checkbox" /> Software Development</label>
//             <label className="sub"><input type="checkbox" /> IT Support / Helpdesk</label>
//             <label className="sub"><input type="checkbox" /> Data Science / Analytics</label>
//             <label className="sub"><input type="checkbox" /> Cybersecurity</label>
//             <label className="sub"><input type="checkbox" /> Cloud Computing</label>
//           </div>

//           <label><input type="checkbox" /> Non-IT Roles</label>
//           <div className="sub-category">
//             <label className="sub"><input type="checkbox" /> Administration / Office Support</label>
//             <label className="sub"><input type="checkbox" /> Human Resources</label>
//             <label className="sub"><input type="checkbox" /> Sales & Marketing</label>
//             <label className="sub"><input type="checkbox" /> Finance / Accounting</label>
//             <label className="sub"><input type="checkbox" /> Customer Service</label>
//           </div>

//           <h5>Location</h5>
//           <label><input type="checkbox" /> Sydney</label>
//           <label><input type="checkbox" /> Melbourne</label>
//           <label><input type="checkbox" /> Brisbane</label>
//           <label><input type="checkbox" /> Perth</label>

//           <h5>Work Type</h5>
//           <label><input type="checkbox" /> Full-Time / Permanent</label>
//           <label><input type="checkbox" /> Contract / Temporary</label>
//           <label><input type="checkbox" /> Part-Time</label>
//           <label><input type="checkbox" /> Internship / Graduate</label>

//           <h5>Salary Range</h5>
//           <div className="salary-range">
//             <input type="text" placeholder="From A$" />
//             <input type="text" placeholder="To A$" />
//           </div>
//         </div>
//       </div> {/* ✅ Correct position of closing div for sidebar */}

//       {/* Overlay to close sidebar when clicking outside */}
//       {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
//     </>
//   );
// }

// export default FilterSidebar;
