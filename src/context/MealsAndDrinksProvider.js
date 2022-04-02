import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

export default function MealsAndDrinksProvider({ children }) {
  const [inputs, setInputs] = useState({
    search: '',
    selectedOption: '',
  });
  const [foods, setFoods] = useState({
    meals: [],
  });
  const [drinks, setDrinks] = useState({
    drinks: [],
  });
  const [progress, setProgress] = useState({
    progress: [],
  });

  const context = {
    inputs,
    setInputs,
    foods,
    setFoods,
    drinks,
    setDrinks,
    progress,
    setProgress,
  };
  return <myContext.Provider value={ context }>{children}</myContext.Provider>;
}
MealsAndDrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
