import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import { isBigEnough } from '../Helpers/detailsHelper';

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

  const [ingredientesDrink, setIngredientesDrink] = useState([]);

  const [ingredientesFood, setIngredientesFoods] = useState([]);

  const [measuresDrink, setMeasuresDrink] = useState([]);

  const [measuresFood, setMeasuresFood] = useState([]);

  const [continueRecipe, setContinueRecipe] = useState([]);

  function handleChangeCheck({ target }) {
    const { value } = target;
    const isChecked = target.checked;
    if (isChecked) {
      setIngredients([...ingredients, value]);
    } else {
      const index = ingredients.indexOf(value);
      setIngredients([
        ...ingredients.slice(0, index),
        ...ingredients.slice(index + 1),
      ]);
    }
  }

  // ######################

  const savedRecipeFromLocalStorage = JSON.parse(
    localStorage.getItem('favoriteRecipes') || '[]',
  );
  const [favoriteRecipes, setFavoriteRecipe] = useState(
    savedRecipeFromLocalStorage,
  );
  const saveRecipeFoodInState = (id) => {
    if (!favoriteRecipes.some((item) => item.id === id)) {
      const obj = {
        id: detailedItem.meals[0].idMeal,
        type: 'food',
        nationality: detailedItem.meals[0].strArea,
        category: detailedItem.meals[0].strCategory,
        alcoholicOrNot: '',
        name: detailedItem.meals[0].strMeal,
        image: detailedItem.meals[0].strMealThumb,
      };
      setFavoriteRecipe([...favoriteRecipes, obj]);
    } else { setFavoriteRecipe(favoriteRecipes.filter((item) => item.id !== id)); }
  };

  useEffect(() => {
    let arrIngredientsDrinks = [];
    let arrMeasure = [];
    let finalIngredients = [];
    let finalMeasures = [];
    if (detailedItem?.drinks?.length > 0) {
      const arrKeyValues1 = Object.entries(detailedItem.drinks[0]);
      arrIngredientsDrinks = arrKeyValues1.map(([key, value]) => (
        key.includes('Ingredient') ? value : ''));
      arrMeasure = arrKeyValues1.map(([key, value]) => (
        key.includes('Measure') ? value : ''));
    }

    finalIngredients = arrIngredientsDrinks.filter(isBigEnough);
    finalMeasures = arrMeasure.filter(isBigEnough);
    setIngredientesDrink(finalIngredients);
    console.log(ingredientesDrink, 'drinks ingredientes');
    setMeasuresDrink(finalMeasures);
    console.log(measuresDrink, 'drinks measures');
  }, [detailedItem]);

  useEffect(() => {
    let arrIngredientsFoods = [];
    let arrMeasure = [];
    let finalIngredients = [];
    let finalMeasures = [];
    console.log(detailedItem?.meals);
    if (detailedItem?.meals?.length > 0) {
      const arrKeyValues1 = Object.entries(detailedItem.meals[0]);
      arrIngredientsFoods = arrKeyValues1.map(([key, value]) => (
        key.includes('Ingredient') ? value : ''));
      arrMeasure = arrKeyValues1.map(([key, value]) => (
        key.includes('Measure') ? value : ''));
    }

    finalIngredients = arrIngredientsFoods.filter(isBigEnough);
    finalMeasures = arrMeasure.filter(isBigEnough);
    setIngredientesFoods(finalIngredients);
    console.log(ingredientesFood);
    setMeasuresFood(finalMeasures);
    console.log(measuresFood);
  }, [detailedItem]);

  const saveRecipeDrinkInState = (id) => {
    if (!favoriteRecipes.some((item) => item.id === id)) {
      const obj = {
        id: detailedItem.drinks[0].idDrink,
        type: 'drink',
        nationality: '',
        category: detailedItem.drinks[0].strCategory,
        alcoholicOrNot: detailedItem.drinks[0].strAlcoholic,
        name: detailedItem.drinks[0].strDrink,
        image: detailedItem.drinks[0].strDrinkThumb,
      };
      setFavoriteRecipe([...favoriteRecipes, obj]);
    } else { setFavoriteRecipe(favoriteRecipes.filter((item) => item.id !== id)); }
  };
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

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
    isDone,
    setDone,
    continueRecipe,
    setContinueRecipe,
    handleChangeCheck,
    saveRecipeFoodInState,
    saveRecipeDrinkInState,
    favoriteRecipes,
    ingredientesDrink,
    setIngredientesDrink,
    ingredientesFood,
    setIngredientesFoods,
    measuresDrink,
    setMeasuresDrink,
    measuresFood,
    setMeasuresFood,

  };

  return <myContext.Provider value={ context }>{children}</myContext.Provider>;
}
MealsAndDrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
