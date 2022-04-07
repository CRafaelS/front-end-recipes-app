import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ExploreDrinksOrFoods from '../Components/ExploreDrinksOrFoods';

function DrinksExplorer() {
  return (
    <div>
      <Header title="Explore Drinks" />
      <ExploreDrinksOrFoods />
      <Footer />
    </div>
  );
}
export default DrinksExplorer;
