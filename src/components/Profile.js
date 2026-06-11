import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="d-flex flex-column justify-content-between vh-100 bg-white p-4">
      <div className="mt-auto">
        <h2 className="fw-bold">Account Settings</h2>
        {user ? (
          <>
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company}</p>
            <p><strong>Agency:</strong> {user.isAgency === 'yes' ? 'Yes' : 'No'}</p>
          </>
        ) : (
          <p>No user found</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
