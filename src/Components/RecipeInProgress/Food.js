import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import './style.css';
import myContext from '../../contexts/myContext';

function Food() {
  const {
    foods,
    setFoods,
    progress,
    setProgress,
    saveRecipeFoodInStateProgress,
    handleChangeCheck,
    ingredients,
    setIngredients,
    favoriteRecipes,
  } = useContext(myContext);

  const location = useLocation();
  const history = useHistory();
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
      arrIngredientsFoods = arrKeyValues1
        .map(([key, value]) => (key.includes('Ingredient') ? value : ''))
        .filter((item) => item !== '' && item !== null);
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
            <button type="button" onClick={ () => saveRecipeFoodInStateProgress(pageId) }>
              <img
                data-testid="favorite-btn"
                className="icon-rip"
                src={
                  favoriteRecipes.length > 0 ? blackHeartIcon : whiteHeartIcon
                }
                alt="favorite"
              />
            </button>
          </div>
          {progress.map((food, index) => (
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
            <button
              data-testid="finish-recipe-btn"
              type="button"
              disabled={ progress.length !== ingredients.length }
              onClick={ () => history.push('/done-recipes') }
            >
              Finish Recipe
            </button>
            )
          </div>
        </div>
      )}
    </div>
  );
}

export default Food;
