import React, { useState } from 'react';
import './style.css';
import { useLocation, useHistory } from 'react-router-dom';
import {
  requestIngredientFromApi,
  requestNameFromApi,
  requestFirstLetterFromApi,
} from '../../services/apiRequests';

export default function HeaderSearchBar() {
  const [inputs, setInputs] = useState({
    search: '',
    selectedOption: '',
  });
  /* const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]); */

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const requestApiForFoodPage = (food) => {
    if (inputs.selectedOption === 'ingredient') {
      return requestIngredientFromApi(food, inputs.search);
    }
    if (inputs.selectedOption === 'name') {
      return requestNameFromApi(food, inputs.search);
    }
    if (inputs.selectedOption === 'firstLetter' && inputs.search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    return requestFirstLetterFromApi(food, inputs.search);
  };

  const actualPath = useLocation();
  const history = useHistory();

  const redirectToFoodDetails = (param) => {
    if (param.length === 1) {
      history.push(`/foods/${param[0].idMeal}`);
    }
  };

  const redirectToDrinkDetails = (param) => {
    if (param.length === 1) {
      history.push(`/drinks/${param[0].idDrink}`);
    }
  };

  const handleSubmit = async () => {
    if (actualPath.pathname === '/foods') {
      const foodsData = await requestApiForFoodPage('themealdb');
      redirectToFoodDetails(foodsData.meals);
      /*  setFoods(foodsData); */
    }
    if (actualPath.pathname === '/drinks') {
      const drinkData = await requestApiForFoodPage('thecocktaildb');
      console.log(await drinkData);
      redirectToDrinkDetails(drinkData.drinks);
      /* setDrinks(drinkData); */
    }
  };

  /* const context = { foods, drinks }; */

  /* useEffect(() => {
    if (drinks.drinks && drinks.drinks.length === 1) {
      history.push(`/drinks/${drinks.drinks[0].idDrink}`);
    }
  }, [drinks, history]); */

  return (
    <div className="container">
      <div>
        <label htmlFor="search">
          <input
            data-testid="search-input"
            name="search"
            value={ inputs.searchInput }
            type="text"
            id="search"
            placeholder="Search Recipe"
            onChange={ handleChange }
          />
        </label>
      </div>
      <div>
        <label htmlFor="Ingredient">
          Ingredient
          <input
            data-testid="ingredient-search-radio"
            name="selectedOption"
            value="ingredient"
            checked={ inputs.selectedOption === 'ingredient' }
            type="radio"
            id="Ingredient"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="Ingredient">
          Name
          <input
            data-testid="name-search-radio"
            name="selectedOption"
            value="name"
            checked={ inputs.selectedOption === 'name' }
            type="radio"
            id="Ingredient"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="Ingredient">
          First Letter
          <input
            data-testid="first-letter-search-radio"
            name="selectedOption"
            value="firstLetter"
            checked={ inputs.selectedOption === 'firstLetter' }
            type="radio"
            id="Ingredient"
            onChange={ handleChange }
          />
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ handleSubmit }
      >
        Search
      </button>
    </div>
  );
}
