import React, { useEffect, useContext, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import myContext from '../contexts/myContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  getDoneRecipes,
  getDrinksInProgress,
} from '../Helpers/detailsHelper';

function FoodDetails() {
  const {
    detailedItem,
    setDetailedItem,
    setProgress,
    ingredientesDrink,
    recommended,
    setRecommended,
    measuresDrink,
    isDone,
    setDone,
    continueRecipe,
    setContinueRecipe,
    favoriteRecipes,
    saveRecipeDrinkInState,
  } = useContext(myContext);
  const MAGIC_NUMBER_6 = 6;
  const history = useHistory();
  const location = useLocation();
  const separator = location.pathname.split('/');

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      );
      const data = await response.json();
      setRecommended(data);
    })();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${separator[2]}`,
      );
      const data = await response.json();
      setDetailedItem(data);
      if (data > 0) {
        setDone(getDoneRecipes(data.Drinks[0].idDrink));
        setProgress(getDrinksInProgress(data.Drinks[0].idDrink));
      }
    }
    fetchData();
  }, [setDetailedItem, setDone, setProgress]);

  useEffect(() => {
    if (detailedItem?.drinks?.length > 0) {
      setDone(getDoneRecipes(detailedItem.drinks[0].idDrink));

      setContinueRecipe(getDrinksInProgress(detailedItem.drinks[0].idDrink));
    }
  }, []);

  const [isShared, setShare] = useState(false);

  const shareRecipe = () => {
    setShare(true);
    copy(`http://localhost:3000/drinks/${detailedItem.drinks[0].idDrink}`);
  };

  return (
    <div>
      {detailedItem?.drinks?.length === 1 && (
        <div>
          <img
            src={ detailedItem.drinks[0].strDrinkThumb }
            alt={ detailedItem.drinks[0].strDrink }
            data-testid="recipe-photo"
          />
          <main>
            <div>
              <h2 data-testid="recipe-title">{ detailedItem.drinks[0].strDrink }</h2>
              <div>
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
                <input
                  onClick={
                    () => saveRecipeDrinkInState(detailedItem?.drinks[0].idDrink)
                  }
                  name="favorite-btn"
                  type="image"
                  data-testid="favorite-btn"
                  alt="Favorite Icon"
                  className="icon-rip"
                  src={
                    favoriteRecipes?.length > 0 ? blackHeartIcon : whiteHeartIcon
                  }
                />
              </div>
            </div>
            <p
              data-testid="recipe-category"
            >
              { detailedItem.drinks[0].strAlcoholic }
            </p>
            <h3>Ingredients</h3>
            <div>
              <ul>
                {ingredientesDrink.map((value, index) => (
                  value
                    ? (
                      <li
                        key={ index }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      >
                        {`${value} - ${measuresDrink[index]}`}
                      </li>) : ''
                ))}
              </ul>
            </div>
            <h3>Instructions</h3>
            <p
              data-testid="instructions"
            >
              {detailedItem.drinks[0].strInstructions}
            </p>
            <h3>Recommended</h3>
            <div className="conteiner">
              {recommended.meals.slice(0, MAGIC_NUMBER_6)
                .map((drink, index) => (
                  <div
                    className="container"
                    data-testid={ `${index}-recomendation-card` }
                    key={ index }
                  >
                    <img
                      src={ drink.strMealThumb }
                      alt={ drink.strMeal }
                      data-testid={ `${index}-card-img` }
                    />
                    <p
                      data-testid={ `${index}-recomendation-title` }
                    >
                      {drink.strMeal}

                    </p>
                  </div>
                ))}
            </div>
            { isDone ? '' : (
              <button
                className="startButton"
                type="button"
                data-testid="start-recipe-btn"
                onClick={ () => history
                  .push(`${detailedItem.drinks[0].idDrink}/in-progress`) }
              >
                {continueRecipe ? 'Continue Recipe' : 'Start Recipe'}
              </button>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
export default FoodDetails;
