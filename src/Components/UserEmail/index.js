import React from 'react';

function UserEmail() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <p data-testid="profile-email">{email}</p>
  );
}

export default UserEmail;
