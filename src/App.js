import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // optional custom styles

function App() {
  return (
    <div className="app-container d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="mobile-wrapper bg-white shadow rounded-3 w-100" style={{ maxWidth: '375px', height: '100%' }}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
