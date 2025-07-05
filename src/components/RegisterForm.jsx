import React from 'react';
import './RegisterForm.css';

function RegisterForm() {
  return (
    <form className="register-form">
      <div className="form-group-row">
        <input type="text" placeholder="First Name *" />
        <input type="text" placeholder="Last Name *" />
      </div>

      <input type="email" placeholder="Your personal email *" />

      <div className="form-group-row">
        <select>
          <option>+91</option>
          {/* Add more country codes if needed */}
        </select>
        <input type="text" placeholder="XXXX XXXX" />
      </div>

     <input type="password" placeholder="Enter Password *" />
      <input type="password" placeholder="Enter Same Password *" />

      <button type="submit" style={{background:"gray"}}>REGISTER</button>

    </form>
  );
}

export default RegisterForm;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './RegisterForm.css';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     setError('');
//     console.log('Registration data:', formData);
//     alert("Registered successfully!");

//     // Reset form
//     setFormData({
//       fullname: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     });
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card p-4 shadow rounded-4 mx-auto" style={{ maxWidth: '500px' }}>
//         <h2 className="text-center mb-4">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="fullname" className="form-label">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="fullname"
//               name="fullname"
//               value={formData.fullname}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {error && <div className="alert alert-danger">{error}</div>}

//           <button type="submit" className="btn btn-primary w-100">Register</button>
//           <p className="text-center mt-3">
//             Already have an account? <a href="#">Login</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;