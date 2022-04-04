import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import myContext from '../../context/myContext';
import {
  requesCategoriesFromApi,
  requesClickCategoryFromApi,
  requestNameFromApi,
} from '../../services/apiRequests';
import './style.css';

function Category() {
  const { setFoods, setDrinks } = useContext(myContext);
  const [foodsCategories, setFoodsCategories] = useState([]);
  const [drinksCategories, setdrinksCategories] = useState([]);
  const [clickFoodsCategories, setclickFoodsCategories] = useState([]);
  const [clickDrinksCategories, setclickDrinksCategories] = useState([]);
  const [compareCategory, setCompareCategory] = useState('');
  const actualPath = useLocation();
  const history = useHistory();
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
      if (name === compareCategory) {
        const foodData = await requestNameFromApi('themealdb', '');
        setFoods(foodData);
        setclickFoodsCategories([]);
        setCompareCategory('');
      } else {
        setCompareCategory(name);
        const foodDataCategory = await requesClickCategoryFromApi('themealdb', name);
        setclickFoodsCategories(foodDataCategory.meals);
        setFoods({ meals: [] });
      }
    }

    if (actualPath.pathname === '/drinks') {
      if (name === compareCategory) {
        const drinkData = await requestNameFromApi('thecocktaildb', '');
        setDrinks(drinkData);
        setclickDrinksCategories([]);
        setCompareCategory('');
      } else {
        setCompareCategory(name);
        const drinkDataCategory = await requesClickCategoryFromApi('thecocktaildb', name);
        setclickDrinksCategories(drinkDataCategory.drinks);
        setDrinks({ drinks: [] });
      }
    }
  };

  const handleAll = async () => {
    if (actualPath.pathname === '/foods') {
      const foodData = await requestNameFromApi('themealdb', '');
      setFoods(foodData);
      setclickFoodsCategories([]);
    }

    if (actualPath.pathname === '/drinks') {
      const drinkData = await requestNameFromApi('thecocktaildb', '');
      setDrinks(drinkData);
      setclickDrinksCategories([]);
    }
  };

  const handleCard = (id) => {
    if (actualPath.pathname === '/foods') {
      history.push(`/foods/${id}`);
    }
    if (actualPath.pathname === '/drinks') {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ handleAll }
      >
        ALL
      </button>
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
          <button
            key={ foodCategory.idMeal }
            data-testid={ `${index}-recipe-card` }
            className="container"
            type="button"
            onClick={ () => handleCard(foodCategory.idMeal) }
          >
            <img
              src={ foodCategory.strMealThumb }
              alt={ foodCategory.strMeal }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{foodCategory.strMeal}</p>
          </button>
        ))}
      {clickDrinksCategories && clickDrinksCategories
        .slice(0, RECIPES_LIMIT).map((drinkCategory, index) => (
          <button
            key={ drinkCategory.idDrink }
            data-testid={ `${index}-recipe-card` }
            className="container"
            type="button"
            onClick={ () => handleCard(drinkCategory.idDrink) }
          >
            <img
              src={ drinkCategory.strDrinkThumb }
              alt={ drinkCategory.strDrink }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{drinkCategory.strDrink}</p>
          </button>
        ))}
    </div>
  );
}
export default Category;