import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import './style.css';
import myContext from '../../context/myContext';

function Food() {
  const { foods, setFoods, progress, setProgress } = useContext(myContext);

  const location = useLocation();
  const separator = location.pathname.split('/');
  const pageId = separator[2];

  useEffect(
    () => {
      async function fetchData() {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${separator[2]}`,
        );
        const data = await response.json();
        setFoods(data);
      }
      fetchData();
    },
    [],
  );

  useEffect(() => {
    let arrIngredientsFoods = [];
    if (foods.meals[0]) {
      const arrKeyValues1 = Object.entries(foods.meals[0]);
      arrIngredientsFoods = arrKeyValues1.map(([key, value]) => (
        key.includes('Ingredient') ? value : ''));
      setProgress(arrIngredientsFoods);
    }
  }, [foods, setProgress]);

  const [ingredients, setIngredients] = useState([]);

  function handleChange({ target }) {
    const { value } = target;
    const isChecked = target.checked;
    if (isChecked) {
      setIngredients([...ingredients, value]);
    } else {
      const index = ingredients.indexOf(value);
      setIngredients([...ingredients.slice(0, index), ...ingredients.slice(index + 1)]);
    }
  }

  useEffect(() => {
    const saved = localStorage.getItem('inProgressRecipes');
    const initialValue = JSON.parse(saved);
    if (initialValue) { setIngredients(initialValue.meals[pageId]); }
  }, []);

  useEffect(() => {
    const obj = {
      cocktails: {
        id: [],
      },
      meals: {
        [pageId]: ingredients,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
  }, [ingredients]);

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
          {progress.filter((item) => item !== '').map((food, index) => (food ? (
            <label
              data-testid={ `${index}-ingredient-step` }
              key={ index }
              htmlFor={ index }
            >
              <input
                id={ index }
                type="checkbox"
                checked={ ingredients.includes(food) }
                value={ food }
                onChange={ handleChange }
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
