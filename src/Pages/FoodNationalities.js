import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ExploreNationalities from '../Components/ExploreNationalities';
import Cards from '../Components/Cards';

function FoodNationalities() {
  return (
    <div>
      <Header title="Explore Nationalities" showButton />
      <ExploreNationalities />
      <Cards />
      <Footer />
    </div>
  );
}
export default FoodNationalities;
