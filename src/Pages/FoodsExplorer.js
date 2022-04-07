import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ExploreDrinksOrFoods from '../Components/ExploreDrinksOrFoods';

function FoodsExplorer() {
  return (
    <div>
      <Header title="Explore Foods" />
      <ExploreDrinksOrFoods />
      <Footer />
    </div>
  );
}
export default FoodsExplorer;
