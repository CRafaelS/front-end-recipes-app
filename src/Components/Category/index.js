import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { requesCategoriesFromApi } from '../../services/apiRequests';
// import './style.css'

function Category() {
  const [foodsCategories, setFoodsCategories] = useState([]);
  const [drinksCategories, drinksFoodsCategories] = useState([]);
  const actualPath = useLocation();
  const CATEGORY_LIMIT = 5;

  useEffect(() => {
    const fechCategory = async () => {
      if (actualPath.pathname === '/foods') {
        const foodDataCategory = await requesCategoriesFromApi('themealdb');
        console.log(foodDataCategory);
        setFoodsCategories(foodDataCategory.meals);
      }

      if (actualPath.pathname === '/drinks') {
        const drinkDataCategory = await requesCategoriesFromApi('thecocktaildb');
        console.log(drinkDataCategory.drinks);
        drinksFoodsCategories(drinkDataCategory.drinks);
      }
    };
    fechCategory();
  }, []);

  return (
    <div>
      {foodsCategories && foodsCategories
        .slice(0, CATEGORY_LIMIT).map((categoryName) => (
          <button
            type="button"
            data-testid={ `${categoryName.strCategory}-category-filter` }
            key={ categoryName.strCategory }
          >
            { categoryName.strCategory }
          </button>
        ))}
      {drinksCategories && drinksCategories
        .slice(0, CATEGORY_LIMIT).map(({ strCategory }) => (
          <button
            type="button"
            data-testid={ `${strCategory}-category-filter` }
            key={ strCategory }
          >
            { strCategory }
          </button>
        ))}
    </div>
  );
}
export default Category;
