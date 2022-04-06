import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import myContext from '../context/myContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FoodDetails() {
  const {
    detailedItem,
    setDetailedItem,
    setProgress,
    progress,
    recommended,
    setRecommended,
    measures,
    setMeasures,
  } = useContext(myContext);
  const MAGIC_NUMBER_6 = 6;
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
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${separator[2]}`,
      );
      const data = await response.json();
      setDetailedItem(data);
    }
    fetchData();
  }, [setDetailedItem]);

  function isBigEnough(value) {
    return value;
  }

  useEffect(() => {
    let arrIngredientsFoods = [];
    let arrMeasure = [];
    let finalIngredients = [];
    let finalMeasures = [];
    if (detailedItem?.meals?.length > 0) {
      const arrKeyValues1 = Object.entries(detailedItem.meals[0]);
      console.log(arrKeyValues1);
      arrIngredientsFoods = arrKeyValues1.map(([key, value]) => (
        key.includes('Ingredient') ? value : ''));
      arrMeasure = arrKeyValues1.map(([key, value]) => (
        key.includes('Measure') ? value : ''));
    }

    finalIngredients = arrIngredientsFoods.filter(isBigEnough);
    finalMeasures = arrMeasure.filter(isBigEnough);
    setProgress(finalIngredients);
    setMeasures(finalMeasures);
  }, [detailedItem]);

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
                <input
                  type="image"
                  data-testid="share-btn"
                  src={ shareIcon }
                  alt="Share Icon"
                />
                <input
                  name="favorite-btn"
                  type="image"
                  src={ whiteHeartIcon }
                  data-testid="favorite-btn"
                  alt="Favorite Icon"
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
                {progress.map((value, index) => (
                  value
                    ? (
                      <li
                        key={ index }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      >
                        {`${value} - ${measures[index]}`}
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
            <input
              type="button"
              data-testid="start-recipe-btn"
              value="Start Recipe"
              className="startButton"
            />
          </main>
        </div>
      )}
    </div>
  );
}
export default FoodDetails;
