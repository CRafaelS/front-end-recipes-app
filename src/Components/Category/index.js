import React, { useContext, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import myContext from '../../context/myContext';
import {
  requesCategoriesFromApi,
  requesClickCategoryFromApi,
} from '../../services/apiRequests';
import './style.css';

function Category() {
  const { setFoods, setDrinks } = useContext(myContext);
  const [foodsCategories, setFoodsCategories] = useState([]);
  const [drinksCategories, setdrinksCategories] = useState([]);
  const [clickFoodsCategories, setdrinksFoodsCategories] = useState([]);
  const [clickDrinksCategories, setclickDrinksCategories] = useState([]);
  const actualPath = useLocation();
  const CATEGORY_LIMIT = 5;
  const RECIPES_LIMIT = 12;

  useEffect(() => {
    const fechCategory = async () => {
      if (actualPath.pathname === '/foods') {
        const foodDataCategory = await requesCategoriesFromApi('themealdb');
        setFoodsCategories(foodDataCategory.meals);
      }

      if (actualPath.pathname === '/drinks') {
        const drinkDataCategory = await requesCategoriesFromApi('thecocktaildb');
        setdrinksCategories(drinkDataCategory.drinks);
      }
    };
    fechCategory();
  }, []);

  const handleCategory = async ({ target }) => {
    const { name } = target;
    if (actualPath.pathname === '/foods') {
      const foodDataCategory = await requesClickCategoryFromApi('themealdb', name);
      console.log(foodDataCategory.meals);
      setdrinksFoodsCategories(foodDataCategory.meals);
      setFoods({ meals: [] });
    }

    if (actualPath.pathname === '/drinks') {
      const drinkDataCategory = await requesClickCategoryFromApi('thecocktaildb', name);
      console.log(drinkDataCategory.drinks);
      setclickDrinksCategories(drinkDataCategory.drinks);
      setDrinks({ drinks: [] });
    }
  };

  return (
    <div>
      {foodsCategories && foodsCategories
        .slice(0, CATEGORY_LIMIT).map((categoryName) => (
          <button
            type="button"
            name={ categoryName.strCategory }
            data-testid={ `${categoryName.strCategory}-category-filter` }
            key={ categoryName.strCategory }
            onClick={ handleCategory }
          >
            { categoryName.strCategory }
          </button>
        ))}
      {drinksCategories && drinksCategories
        .slice(0, CATEGORY_LIMIT).map(({ strCategory }) => (
          <button
            type="button"
            name={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            key={ strCategory }
            onClick={ handleCategory }
          >
            { strCategory }
          </button>
        ))}
      {clickFoodsCategories && clickFoodsCategories
        .slice(0, RECIPES_LIMIT).map((foodCategory, index) => (
          <div
            key={ foodCategory.idMeal }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ foodCategory.strMealThumb }
              alt={ foodCategory.strMeal }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{foodCategory.strMeal}</p>
          </div>
        ))}
      {clickDrinksCategories && clickDrinksCategories
        .slice(0, RECIPES_LIMIT).map((drinkCategory, index) => (
          <div
            key={ drinkCategory.idDrink }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ drinkCategory.strDrinkThumb }
              alt={ drinkCategory.strDrink }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{drinkCategory.strDrink}</p>
          </div>
        ))}
    </div>
  );
}
export default Category;
