import React, { useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import { requestNameFromApi } from '../services/apiRequests';
import myContext from '../context/myContext';

function Drinks() {
  const divStyle = {
    width: '360px',
  };
  const { setDrinks } = useContext(myContext);

  useEffect(() => {
    const fechDrinks = async () => {
      const drinkData = await requestNameFromApi('thecocktaildb', '');
      setDrinks(drinkData);
    };
    fechDrinks();
  }, []);

  return (
    <div style={ divStyle }>
      <Header title="Drinks" showButton />
      <Cards />
      <Footer />
    </div>
  );
}
export default Drinks;
