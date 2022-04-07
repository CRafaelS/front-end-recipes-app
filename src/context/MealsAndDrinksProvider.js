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

  const [detailedItem, setDetailedItem] = useState({
    meals: [],
  });

  const [recommended, setRecommended] = useState({
    meals: [],
    drinks: [],
  });

  const [isDone, setDone] = useState(false);

  const [progress, setProgress] = useState([]);

  const [ingredientes, setIngredientes] = useState([]);

  const [measures, setMeasures] = useState([]);

  const [continueRecipe, setContinueRecipe] = useState([]);

  const context = {
    inputs,
    setInputs,
    foods,
    setFoods,
    drinks,
    setDrinks,
    detailedItem,
    setDetailedItem,
    recommended,
    setRecommended,
    progress,
    setProgress,
    measures,
    setMeasures,
    isDone,
    setDone,
    ingredientes,
    setIngredientes,
    continueRecipe,
    setContinueRecipe,
  };

  return <myContext.Provider value={ context }>{children}</myContext.Provider>;
}
MealsAndDrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
