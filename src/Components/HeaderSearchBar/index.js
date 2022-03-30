import React, { useState } from 'react';
import './style.css';
import { useLocation } from 'react-router-dom';
import {
  requestIngredientFromApi,
  requestNameFromApi,
  requestFirstLetterFromApi,
} from '../../services/apiRequests';

export default function HeaderSearchBar() {
  const [foods, setFoods] = useState({
    search: '',
    selectedOption: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFoods((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const requestApiForFoodPage = (food) => {
    if (foods.selectedOption === 'ingredient') {
      return requestIngredientFromApi(food, foods.search);
    }
    if (foods.selectedOption === 'name') {
      return requestNameFromApi(food, foods.search);
    }
    if (foods.selectedOption === 'firstLetter' && foods.search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    return requestFirstLetterFromApi(food, foods.search);
  };

  const actualPath = useLocation();

  const handleSubmit = () => {
    if (actualPath.pathname === '/foods') { requestApiForFoodPage('themealdb'); }
    if (actualPath.pathname === '/drinks') { requestApiForFoodPage('thecocktaildb'); }
  };

  return (
    <div className="container">
      <div>
        <label htmlFor="search">
          <input
            data-testid="search-input"
            name="search"
            value={ foods.searchInput }
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
            checked={ foods.selectedOption === 'ingredient' }
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
            checked={ foods.selectedOption === 'name' }
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
            checked={ foods.selectedOption === 'firstLetter' }
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
