import React from 'react';
import Header from '../Components/Header';
import HeaderSearchBar from '../Components/HeaderSearchBar';

function Drinks() {
  const divStyle = {
    width: '360px',
  };
  return (
    <div style={ divStyle }>
      <Header />
      <HeaderSearchBar />
    </div>
  );
}
export default Drinks;
