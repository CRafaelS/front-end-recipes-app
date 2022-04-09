import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CardsIngredients from '../Components/CardsIngredients';

function FoodIngredients() {
  return (
    <div>
      <Header title="Explore Ingredients" />
      <CardsIngredients />
      <Footer />
    </div>
  );
}
export default FoodIngredients;
