import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import myContext from '../context/myContext';
import { requestNameFromApi } from '../services/apiRequests';

export default function Foods() {
  const divStyle = {
    width: '360px',
  };

  const { setFoods } = useContext(myContext);

  useEffect(() => {
    const fechFoods = async () => {
      const foodData = await requestNameFromApi('themealdb', '');
      setFoods(foodData);
    };
    fechFoods();
  }, []);

  return (
    <div style={ divStyle }>
      <Header title="Foods" showButton />
      <Cards />
      <Footer />
    </div>
  );
}
