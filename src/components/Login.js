import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) navigate('/profile');
  };

  return (
    <div className="d-flex flex-column justify-content-between vh-100 bg-white p-4">
      <div className="mt-auto">
        <h5 className="fw-bold">Login to your PopX account</h5>
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>

      <form className="w-100" onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 py-2 mb-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
