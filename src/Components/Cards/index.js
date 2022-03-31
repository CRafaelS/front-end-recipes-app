import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import './style.css';

export default function Cards() {
  const { foods, drinks } = useContext(myContext);
  const DOZE = 12;
  return (
    <div>
      {foods.meals && foods.meals.length > 1 && (
        <div>
          {foods.meals.slice(0, DOZE).map((food, index) => (
            <div
              className="container"
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <img
                src={ food.strMealThumb }
                alt={ food.strMeal }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{food.strMeal}</p>
            </div>
          ))}
        </div>
      )}
      {drinks.drinks && drinks.drinks.length > 1 && (
        <div>
          {drinks.drinks.slice(0, DOZE).map((drink, index) => (
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
              <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
            </div>
          ))}
        </div>
      )}
      {/* {foods.length === 0 && (
        <div>
          { global.alert('Sorry')}
        </div>
      )} */}
    </div>
  );
}
