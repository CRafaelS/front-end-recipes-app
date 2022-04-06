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
  } = useContext(myContext);
  const MAGIC_NUMBER_6 = 6;
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
    }
    fetchData();
  }, [setDetailedItem]);

  function isBigEnough(value) {
    return value;
  }

  useEffect(() => {
    let arrIngredientsDrinks = [];
    let finalIngredients = [];
    console.log(detailedItem, 'detaildItem');
    if (detailedItem?.drinks?.length > 0) {
      const arrKeyValues1 = Object.entries(detailedItem.drinks[0]);
      console.log(arrKeyValues1, 'arrKeyValues1');
      arrIngredientsDrinks = arrKeyValues1.map(([key, value]) => (
        key.includes('Ingredient') ? value : ''));
      console.log(arrIngredientsDrinks, 'dentro do if');
    }
    finalIngredients = arrIngredientsDrinks.filter(isBigEnough);
    console.log(finalIngredients, 'array final');
    setProgress(finalIngredients);
  }, [detailedItem]);

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
              { detailedItem.drinks[0].strCategory }
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
                        {value}
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
            <div>
              {recommended.meals.slice(0, MAGIC_NUMBER_6)
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
                      data-testid={ `${index}-card-name` }
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
            />
          </main>
        </div>
      )}
    </div>
  );
}
export default FoodDetails;
