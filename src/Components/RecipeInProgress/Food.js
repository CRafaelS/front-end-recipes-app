import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import './style.css';
import myContext from '../../context/myContext';

function Food() {
  const { foods, setFoods, progress, setProgress } = useContext(myContext);
  const location = useLocation();
  console.log(location);
  const a = location.pathname.split('/');
  console.log(a);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${a[2]}`,
      );
      const data = await response.json();
      console.log(await data);
      setFoods(data);
    }
    fetchData();
  }, [a, setFoods]);

  useEffect(() => {
    let arrIngredientsFoods = [];
    if (foods.meals[0]) {
      const arrKeyValues1 = Object.entries(foods.meals[0]);
      arrIngredientsFoods = arrKeyValues1.map(([key, value]) => (
        key.includes('Ingredient') ? value : ''));
      setProgress(arrIngredientsFoods);
    }
  }, [foods, setProgress]);

  return (
    <div>
      {progress.length && (
        <div className="container">
          <img
            className="img-rip"
            data-testid="recipe-photo"
            src={ foods.meals[0].strMealThumb }
            alt="Receita em progresso"
          />
          <br />
          <p data-testid="recipe-title">{foods.meals[0].strMeal}</p>
          <div className="icon-container">
            <img
              data-testid="share-btn"
              className="icon-rip"
              src={ shareIcon }
              alt="share"
            />
            <img
              data-testid="favorite-btn"
              className="icon-rip"
              src={ whiteHeartIcon }
              alt="share"
            />
          </div>
          {progress.map((food, index) => (food ? (
            <label key={ index } htmlFor={ index }>
              <input
                data-testid={ `${index}-ingredient-step` }
                id={ index }
                type="checkbox"
              />
              {food}
            </label>
          ) : null))}
          <p data-testid="recipe-category">{foods.meals[0].strCategory}</p>
          <p data-testid="instructions">{foods.meals[0].strInstructions}</p>
          <div>
            <button data-testid="finish-recipe-btn" type="button">
              Finish Recipe
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Food;
/* obj = {
prop1: 'value1',
prop2: 'value2',
}

arr = Object.entries(obj)

arr.map(([key, value]) => key.includes('prop') ? value : null)  */

/* .map((item, index) => (
  <label key={ index } htmlFor={ index }>
    <input id={ index } type="checkbox" />
    {item.strIngredient1}
  </label>
)) */

/* import { useLocation } from "@reach/router"

const useAnalytics = (props) => {
const location = useLocation();

useEffect(() => {
ga.send(['pageview', location.pathname]);
}, [])
)  */

/* useEffect(() => {
  const fechCategory = async () => {
  if (actualPath.pathname === '/foods') {
  const foodDataCategory = await requesCategoriesFromApi('themealdb');
  setFoodsCategories(foodDataCategory.meals);
  }

  if (actualPath.pathname === '/drinks') {
  const drinkDataCategory = await requesCategoriesFromApi('thecocktaildb');
  setdrinksCategories(drinkDataCategory.drinks);
  }
  };
  fechCategory();
  }, []);  */
