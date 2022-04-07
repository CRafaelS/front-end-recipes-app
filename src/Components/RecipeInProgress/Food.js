import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import './style.css';
import myContext from '../../context/myContext';

function Food() {
  const {
    foods,
    setFoods,
    progress,
    setProgress,
    saveRecipeInState,
    handleChangeCheck,
    ingredients,
    setIngredients, favoriteRecipes,
  } = useContext(myContext);

  const location = useLocation();
  const separator = location.pathname.split('/');
  const pageId = separator[2];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${separator[2]}`,
      );
      const data = await response.json();
      setFoods(data);
    }
    fetchData();
  }, [setFoods]);

  useEffect(() => {
    let arrIngredientsFoods = [];
    if (foods.meals[0]) {
      const arrKeyValues1 = Object.entries(foods.meals[0]);
      arrIngredientsFoods = arrKeyValues1.map(([key, value]) => (
        key.includes('Ingredient') ? value : ''));
      setProgress(arrIngredientsFoods);
    }
  }, [foods, setProgress]);

  useEffect(() => {
    const saved = localStorage.getItem('inProgressRecipes');
    const initialValue = JSON.parse(saved);
    if (initialValue) {
      setIngredients(initialValue.meals[pageId]);
    }
  }, [pageId, setIngredients]);

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
  }, [ingredients, pageId]);

  const [isShared, setShare] = useState(false);

  const shareRecipe = () => {
    setShare(true);
    copy(`http://localhost:3000/foods/${pageId}`);
  };

  console.log(favoriteRecipes);

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
            <button type="button" onClick={ shareRecipe }>
              {isShared ? (
                'Link copied!'
              ) : (
                <img
                  data-testid="share-btn"
                  className="icon-rip"
                  src={ shareIcon }
                  alt="share"
                />
              )}
            </button>
            <button type="button" onClick={ () => saveRecipeInState(pageId) }>
              <img
                data-testid="favorite-btn"
                className="icon-rip"
                src={ favoriteRecipes.length > 0 ? blackHeartIcon : whiteHeartIcon }
                alt="favorite"
              />
            </button>
          </div>
          {progress
            .filter((item) => item !== '' && item !== null)
            .map((food, index) => (
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
                  onChange={ handleChangeCheck }
                />
                {food}
              </label>
            ))}
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
