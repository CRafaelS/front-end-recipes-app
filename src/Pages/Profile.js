import React from 'react';
import Footer from '../Components/Footer';
import UserEmail from '../Components/UserEmail';
import Header from '../Components/Header';
import ProfileButtons from '../Components/ProfileButtons';

function Profile() {
  return (
    <>
      <Header title="Profile" />
      <UserEmail />
      <ProfileButtons />
      <Footer />
    </>
  );
}
export default Profile;
