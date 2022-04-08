import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../contexts/myContext';
import {
  requesNationalitiesFromApi,
  requestNameFromApi } from '../../services/apiRequests';

function ExploreNationalities() {
  const [nationalities, setnationalities] = useState([]);
  const { setFoods } = useContext(myContext);

  useEffect(() => {
    const fechNationalities = async () => {
      const getnationalities = await requesNationalitiesFromApi();
      setnationalities(getnationalities);
    };
    fechNationalities();
  }, []);

  useEffect(() => {
    const fechFoods = async () => {
      const foodData = await requestNameFromApi('themealdb', '');
      console.log();
      setFoods(foodData);
    };
    fechFoods();
  }, [setFoods]);

  const handleNationality = ({ target }) => {
    const { value } = target;
    console.log(value);
  };

  return (
    <select
      data-testid="explore-by-nationality-dropdown"
      onChange={ handleNationality }
    >
      { nationalities && nationalities.map((nacionality) => (
        <option
          key={ nacionality.strArea }
          data-testid={ `${nacionality.strArea}-option` }
        >
          {nacionality.strArea}
        </option>
      ))}
    </select>
  );
}
export default ExploreNationalities;
