import React, { useContext, useEffect } from 'react';
import { requestNameFromApi } from '../services/apiRequests';
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import myContext from '../contexts/myContext';
import Category from '../Components/Category';

export default function Foods() {
  const divStyle = {
    width: '360px',
  };

  const { setFoods, setDrinks } = useContext(myContext);

  useEffect(() => {
    const fechFoods = async () => {
      const foodData = await requestNameFromApi('themealdb', '');
      setFoods(foodData);
      setDrinks({
        drinks: [],
      });
    };
    fechFoods();
  }, [setFoods, setDrinks]);

  return (
    <div style={ divStyle }>
      <Header title="Foods" showButton />
      <Category />
      <Cards />
      <Footer />
    </div>
  );
}
