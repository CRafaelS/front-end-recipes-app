import React, { useEffect, useContext } from 'react';
import { requestNameFromApi } from '../services/apiRequests';
import myContext from '../contexts/myContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Category from '../Components/Category';

function Drinks() {
  const divStyle = {
    width: '360px',
  };
  const { setDrinks, setFoods } = useContext(myContext);

  useEffect(() => {
    const fechDrinks = async () => {
      const drinkData = await requestNameFromApi('thecocktaildb', '');
      setDrinks(drinkData);
      setFoods({
        meals: [],
      });
    };
    fechDrinks();
  }, [setDrinks, setFoods]);

  return (
    <div style={ divStyle }>
      <Header title="Drinks" showButton />
      <Category />
      <Cards />
      <Footer />
    </div>
  );
}
export default Drinks;
