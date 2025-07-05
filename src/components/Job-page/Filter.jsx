// import React, { useState } from 'react';
// import './Filter.css';
// import { FaFilter, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSection, setOpenSection] = useState({
//     category: true,
//     location: true,
//     workType: true,
//     salary: true,
//   });

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   const toggleSection = (section) => {
//     setOpenSection((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
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
//           {/* Category Section */}
//           <div className="filter-section">
//             <div className="filter-title" onClick={() => toggleSection('category')}>
//               <h5>Category</h5>
//               {openSection.category ? <FaChevronUp /> : <FaChevronDown />}
//             </div>
//             {openSection.category && (
//               <div className="filter-options">
//                 <label><input type="checkbox" /> Admin / Secretarial / Office Support</label>
//                 <label className="sub"><input type="checkbox" /> Administration</label>
//                 <label><input type="checkbox" /> Advertising / Media / Publishing</label>
//                 <label><input type="checkbox" /> IT & Telecomms</label>
//               </div>
//             )}
//           </div>

//           {/* Location Section */}
//           <div className="filter-section">
//             <div className="filter-title" onClick={() => toggleSection('location')}>
//               <h5>Location</h5>
//               {openSection.location ? <FaChevronUp /> : <FaChevronDown />}
//             </div>
//             {openSection.location && (
//               <div className="filter-options">
//                 <label><input type="checkbox" /> Sydney</label>
//                 <label><input type="checkbox" /> Perth</label>
//               </div>
//             )}
//           </div>

//           {/* Work Type Section */}
//           <div className="filter-section">
//             <div className="filter-title" onClick={() => toggleSection('workType')}>
//               <h5>Work Type</h5>
//               {openSection.workType ? <FaChevronUp /> : <FaChevronDown />}
//             </div>
//             {openSection.workType && (
//               <div className="filter-options">
//                 <label><input type="checkbox" /> Contract or Temp</label>
//                 <label><input type="checkbox" /> Permanent / Full Time</label>
//               </div>
//             )}
//           </div>

//           {/* Salary Section */}
//           <div className="filter-section">
//             <div className="filter-title" onClick={() => toggleSection('salary')}>
//               <h5>Salary</h5>
//               {openSection.salary ? <FaChevronUp /> : <FaChevronDown />}
//             </div>
//             {openSection.salary && (
//               <div className="filter-options">
//                 <input type="text" placeholder="From A$" />
//                 <input type="text" placeholder="To A$" />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
//     </>
//   );
// }

// export default Navbar;