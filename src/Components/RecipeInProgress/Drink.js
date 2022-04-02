import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import './style.css';
import myContext from '../../context/myContext';

export default function Drink() {
  const { drinks, setDrinks, progress, setProgress } = useContext(myContext);
  const location = useLocation();
  const separator = location.pathname.split('/');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${separator[2]}`,
      );
      const data = await response.json();
      console.log(await data);
      setDrinks(data);
    }
    fetchData();
  }, [separator, setDrinks]);

  useEffect(() => {
    let arrIngredientsFoods = [];
    if (drinks.drinks[0]) {
      const arrKeyValues1 = Object.entries(drinks.drinks[0]);
      arrIngredientsFoods = arrKeyValues1.map(([key, value]) => (
        key.includes('Ingredient') ? value : ''));
      setProgress(arrIngredientsFoods);
    }
  }, [drinks, setProgress]);

  return (
    <div>
      {progress.length && (
        <div className="container">
          <img
            className="img-rip"
            data-testid="recipe-photo"
            src={ drinks.drinks[0].strDrinkThumb }
            alt="Receita em progresso"
          />
          <br />
          <p data-testid="recipe-title">{drinks.drinks[0].strDrink}</p>
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
          {progress.map((item, index) => (item ? (
            <label
              data-testid={ `${index}-ingredient-step` }
              key={ index }
              htmlFor={ index }
            >
              <input id={ index } type="checkbox" />
              {item}
            </label>
          ) : null))}
          <p data-testid="recipe-category">{drinks.drinks[0].strCategory}</p>
          <p data-testid="instructions">{drinks.drinks[0].strInstructions}</p>
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
