import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/profile');
  };

  return (
    <div className="d-flex flex-column justify-content-between vh-100 bg-white p-4">
      <div className="mt-auto">
        <h2 className="fw-bold">Create your PopX account</h2>
      </div>

      <form className="w-100" onSubmit={handleSubmit}>
        <input className="form-control mb-3" placeholder="Full Name" name="fullName" onChange={handleChange} required />
        <input className="form-control mb-3" placeholder="Phone number" name="phone" onChange={handleChange} required />
        <input className="form-control mb-3" placeholder="Email address" name="email" onChange={handleChange} required />
        <input className="form-control mb-3" placeholder="Password" type="password" name="password" onChange={handleChange} required />
        <input className="form-control mb-3" placeholder="Company name" name="company" onChange={handleChange} />

        <div className="mb-3">
          <label className="form-label">Are you an agency?</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="isAgency" value="yes" checked={data.isAgency === 'yes'} onChange={handleChange} />
            <label className="form-check-label">Yes</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="isAgency" value="no" checked={data.isAgency === 'no'} onChange={handleChange} />
            <label className="form-check-label">No</label>
          </div>
        </div>

        <button className="btn btn-primary w-100 py-2 mb-4 rounded" type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
