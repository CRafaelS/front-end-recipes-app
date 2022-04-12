import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import myContext from '../../contexts/myContext';

export default function Drink() {
  const {
    drinks,
    setDrinks,
    progress,
    setProgress,
    saveRecipeDrinkInStateProgress,
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
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${separator[2]}`,
      );
      const data = await response.json();
      setDrinks(data);
    }
    fetchData();
  }, [setDrinks, separator]);

  useEffect(() => {
    let arrIngredientsFoods = [];
    if (drinks.drinks[0]) {
      const arrKeyValues1 = Object.entries(drinks.drinks[0]);
      arrIngredientsFoods = arrKeyValues1
        .map(([key, value]) => (key.includes('Ingredient') ? value : ''))
        .filter((item) => item !== '' && item !== null);
      setProgress(arrIngredientsFoods);
      setProgress(arrIngredientsFoods);
    }
  }, [drinks, setProgress]);

  useEffect(() => {
    const saved = localStorage.getItem('inProgressRecipes');
    const initialValue = JSON.parse(saved);
    if (initialValue) {
      setIngredients(initialValue.cocktails[pageId]);
    }
  }, [pageId, setIngredients]);

  useEffect(() => {
    const obj = {
      cocktails: {
        [pageId]: ingredients,
      },
      meals: {
        id: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
  }, [ingredients, pageId]);

  const [isShared, setShare] = useState(false);

  const shareRecipe = () => {
    setShare(true);
    copy(`http://localhost:3000/drinks/${pageId}`);
  };

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
            <button
              type="button"
              onClick={ () => saveRecipeDrinkInStateProgress(pageId) }
            >
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
          {progress.map((drink, index) => (drink ? (
            <label
              data-testid={ `${index}-ingredient-step` }
              key={ index }
              htmlFor={ index }
            >
              <input
                id={ index }
                type="checkbox"
                checked={ ingredients.includes(drink) }
                value={ drink }
                onChange={ handleChangeCheck }
              />
              {drink}
            </label>
          ) : null))}
          <p data-testid="recipe-category">{drinks.drinks[0].strCategory}</p>
          <p data-testid="instructions">{drinks.drinks[0].strInstructions}</p>
          <div>
            <button
              data-testid="finish-recipe-btn"
              type="button"
              disabled={ progress.length !== ingredients.length }
              onClick={ () => history.push('/done-recipes') }
            >
              Finish Recipe
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
