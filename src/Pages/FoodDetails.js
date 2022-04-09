import React, { useEffect, useContext, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import myContext from '../contexts/myContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { getDoneRecipes } from '../Helpers/detailsHelper';

function FoodDetails() {
  const {
    detailedItem,
    setDetailedItem,
    ingredientesFood,
    recommended,
    setRecommended,
    measuresFood,
    isDone,
    setDone,
    continueRecipe,
    setContinueRecipe,
    favoriteRecipes,
    saveRecipeFoodInState,
  } = useContext(myContext);

  const MAGIC_NUMBER_6 = 6;
  const history = useHistory();
  const location = useLocation();
  const separator = location.pathname.split('/');

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      );
      const data = await response.json();
      setRecommended(data);
    })();
  }, [setRecommended]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${separator[2]}`,
      );
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setDone(getDoneRecipes(data.meals[0].idMeals));
      }
      setDetailedItem(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (detailedItem?.drinks?.length > 0) {
      setDone(getDoneRecipes(detailedItem.meals[0].idDrink));
      setContinueRecipe(getDrinksInProgress(detailedItem.meals[0].idDrink));
    }
  }, []);

  const [isShared, setShare] = useState(false);

  const shareRecipe = () => {
    setShare(true);
    copy(`http://localhost:3000/foods/${detailedItem.meals[0].idMeal}`);
  };

  return (
    <div>
      {detailedItem.meals.length === 1 && (
        <div>
          <img
            src={ detailedItem.meals[0].strMealThumb }
            alt={ detailedItem.meals[0].strMeal }
            data-testid="recipe-photo"
          />
          <main>
            <div>
              <h2 data-testid="recipe-title">{ detailedItem.meals[0].strMeal }</h2>
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
                  onClick={ () => saveRecipeFoodInState(detailedItem?.meals[0].idMeal) }
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
              { detailedItem.meals[0].strCategory }
            </p>
            <h3>Ingredients</h3>
            <div>
              <ul>
                {ingredientesFood.map((value, index) => (
                  value
                    ? (
                      <li
                        key={ index }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      >
                        {`${value} - ${measuresFood[index]}`}
                      </li>) : ''
                ))}
              </ul>
            </div>
            <h3>Instructions</h3>
            <p
              data-testid="instructions"
            >
              {detailedItem.meals[0].strInstructions}
            </p>
            <h3>Video</h3>
            <iframe
              title="video"
              src={ `https://www.youtube.com/embed/${detailedItem.meals[0].strYoutube.split('watch?v=')[1]}` }
              data-testid="video"
            />
            <h3>Recommended</h3>
            <div className="conteiner">
              {recommended.drinks.slice(0, MAGIC_NUMBER_6)
                .map((drink, index) => (
                  <div
                    className="container"
                    data-testid={ `${index}-recomendation-card` }
                    key={ index }
                  >
                    <img
                      src={ drink.strDrinkThumb }
                      alt={ drink.strDrink }
                      data-testid={ `${index}-card-img` }
                    />
                    <p
                      data-testid={ `${index}-recomendation-title` }
                    >
                      {drink.strDrink}

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
                  .push(`${detailedItem.meals[0].idMeal}/in-progress`) }
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
