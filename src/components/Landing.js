import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center vh-100 bg-white p-4">
      <div className="text-center mt-auto">
        <h4 className="fw-bold">Welcome to PopX</h4>
        <p className="text-muted px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>

      <div className="w-100">
        <Link to="/signup" className="btn btn-primary w-100 py-2 mb-2 rounded">Create Account</Link>
        <Link to="/login" className="btn btn-outline-secondary w-100 py-2 rounded">Already Registered? Login</Link>
      </div>
    </div>
  );
};

export default Landing;
