import React from 'react';
import Footer from '../Components/Footer';
import UserEmail from '../Components/UserEmail';
import Header from '../Components/Header';

function Profile() {
  return (
    <>
      <Header title="Profile" />
      <UserEmail />
      <button
        type="button"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
      >
        Logout
      </button>
      <Footer />
    </>
  );
}
export default Profile;
