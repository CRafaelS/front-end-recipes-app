import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import myContext from '../context/myContext';

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
      console.log(data);
    }
    fetchData();
  }, [setDetailedItem]);

  useEffect(() => {
    let arrIngredientsFoods = [];
    console.log(detailedItem);
    if (detailedItem?.meals?.length > 0) {
      console.log(detailedItem);
      const arrKeyValues1 = Object.entries(detailedItem.meals[0]);
      arrIngredientsFoods = arrKeyValues1.map(([key, value]) => (
        key.includes('Ingredient') ? value : ''));
      setProgress(arrIngredientsFoods);
      console.log(progress);
    }
  }, [detailedItem]);

  console.log(detailedItem, 'fora do useEffect');
  console.log(recommended, 'fora do useEffect recomended');

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
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {value}
                  </li>))}
              </ul>
            </div>
            <h3>Instructions</h3>
            <p
              data-testid="instructions"
            >
              {detailedItem.meals[0].strInstructions}
            </p>
            <h3>Video</h3>
            <div
              src="https://www.youtube.com/embed/1IszT_guI08"
              data-testid="video"
              title="YouTube video player"
              frameBorder="0"
              allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture
        "
              allowFullScreen
            />
            <h3>Recommended</h3>
            <div>
              {recommended?.drinks.slice(0, MAGIC_NUMBER_6)
               .map((drink, index) => (
                <div
                  className="container"
                  data-testid={ `${index}-recipe-card` }
                  key={ index }
                >
                  <img
                    src={ drink.strDrinkThumb }
                    alt={ drink.strDrink }
                    data-testid={ `${index}-card-img` }
                  />
                  <p
                  data-testid={ `${index}-card-name` }
                  >{drink.strDrink}</p>
                </div>
                ))}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
export default FoodDetails;
