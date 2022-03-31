import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import HeaderSearchBar from '../Components/HeaderSearchBar';
import Cards from '../Components/Cards';

function Drinks() {
  const divStyle = {
    width: '360px',
  };
  return (
    <div style={ divStyle }>
      <Header />
      <HeaderSearchBar />
      <Cards />
      <Footer />
    </div>
  );
}
export default Drinks;
