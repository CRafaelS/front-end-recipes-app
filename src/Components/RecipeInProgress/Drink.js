import React, { useContext } from 'react';
import shareicon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import './style.css';
import myContext from '../../context/myContext';

export default function Drink() {
  const { drinks } = useContext(myContext);

  const drinkItem = drinks.drinks[0];
  const arrKeyValues = Object.entries(drinkItem);
  const arrIngredientsDrinks = arrKeyValues.map(([key, value]) => (
    key.includes('Ingredient') ? value : ''));

  return (
    <div>
      {drinks.drinks.length === 1 && (
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
            <img className="icon-rip" src={ shareicon } alt="share" />
            <img className="icon-rip" src={ whiteHeartIcon } alt="share" />
          </div>
          {arrIngredientsDrinks.map((item, index) => (
            item
              ? (
                <label key={ index } htmlFor={ index }>
                  <input id={ index } type="checkbox" />
                  {item}
                </label>) : null))}
          <p data-testid="recipe-category">{drinks.drinks[0].strCategory}</p>
          <p data-testid="instructions">{drinks.drinks[0].strInstructions}</p>
          <div>
            <button data-testid="finish-recipe-btn" type="button">
              Finish Recipe
            </button>
          </div>
        </div>)}
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
