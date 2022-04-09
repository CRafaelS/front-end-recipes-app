import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  requestIngredientByNameFromApi,
  requestIgredientsFromApi,
} from '../../services/apiRequests';
import myContext from '../../contexts/myContext';

function CardsIngredients() {
  const [foodsIngredients, setFoodsIngredients] = useState([]);
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const { setFoods, setDrinks } = useContext(myContext);
  const history = useHistory();
  const actualPath = useLocation();
  const RECIPES_LIMIT = 12;

  useEffect(() => {
    const fechIgredients = async () => {
      if (actualPath.pathname === '/explore/foods/ingredients') {
        const dataFoodIgredients = await requestIgredientsFromApi('themealdb');
        console.log(dataFoodIgredients);
        setFoodsIngredients(dataFoodIgredients.meals);
      }
      if (actualPath.pathname === '/explore/drinks/ingredients') {
        const dataDrinksIgredients = await requestIgredientsFromApi('thecocktaildb');
        console.log(dataDrinksIgredients);
        setDrinksIngredients(dataDrinksIgredients.drinks);
      }
    };
    fechIgredients();
  }, [actualPath.pathname, setFoodsIngredients]);

  const handleIngredient = async (ingredient) => {
    if (actualPath.pathname === '/explore/foods/ingredients') {
      const foods = await requestIngredientByNameFromApi('themealdb', ingredient);
      setFoods(foods);
      history.push('/foods');
    }
    if (actualPath.pathname === '/explore/drinks/ingredients') {
      const drinks = await requestIngredientByNameFromApi('thecocktaildb', ingredient);
      console.log(drinks);
      setDrinks(drinks);
      history.push('/drinks');
    }
  };

  return (
    <div>
      {foodsIngredients && (
        <div>
          { foodsIngredients.slice(0, RECIPES_LIMIT).map((foodIngredient, index) => (
            <button
              className="container"
              data-testid={ `${index}-ingredient-card` }
              key={ index }
              type="button"
              onClick={ () => handleIngredient(foodIngredient.strIngredient) }
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${foodIngredient.strIngredient}-Small.png` }
                alt={ foodIngredient.strIngredient }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{foodIngredient.strIngredient}</p>
            </button>
          ))}
        </div>
      )}
      {drinksIngredients && (
        <div>
          { drinksIngredients.slice(0, RECIPES_LIMIT).map((drinkIngredient, index) => (
            <button
              className="container"
              data-testid={ `${index}-ingredient-card` }
              key={ index }
              type="button"
              onClick={ () => handleIngredient(drinkIngredient.strIngredient1) }
            >
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${drinkIngredient.strIngredient1}-Small.png` }
                alt={ drinkIngredient.strIngredient1 }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{drinkIngredient.strIngredient1}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardsIngredients;
