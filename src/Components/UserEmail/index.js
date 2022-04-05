import React from 'react';

function UserEmail() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <p data-testid="profile-email">{user && user.email}</p>
  );
}

export default UserEmail;
