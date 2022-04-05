import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Profile() {
  return (
    <>
      <Header title="Profile" />
      <p data-testid="profile-email">Email</p>
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
        Done Recipes
      </button>
      <Footer />
    </>
  );
}
export default Profile;
