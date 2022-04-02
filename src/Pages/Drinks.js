import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Cards from '../Components/Cards';

function Drinks() {
  const divStyle = {
    width: '360px',
  };
  return (
    <div style={ divStyle }>
      <Header title="Drinks" showButton />
      <Cards />
      <Footer />
    </div>
  );
}
export default Drinks;
