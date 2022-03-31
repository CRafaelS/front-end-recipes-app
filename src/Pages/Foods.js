import React from 'react';
import Header from '../Components/Header';
import HeaderSearchBar from '../Components/HeaderSearchBar';
import Cards from '../Components/Cards';

export default function Foods() {
  const divStyle = {
    width: '360px',
  };
  return (
    <div style={ divStyle }>
      <Header />
      <HeaderSearchBar />
      <Cards />
    </div>
  );
}
