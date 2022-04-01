import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Foods from '../Pages/Foods';
import Drinks from '../Pages/Drinks';
import FoodDetails from '../Pages/FoodDetails';
import DrinkDetails from '../Pages/DrinkDetails';
import ProgressFoodRecipe from '../Pages/ProgressFoodRecipe';
import ProgressDrinkRecipe from '../Pages/ProgressDrinkRecipe';
import Explorer from '../Pages/Explorer';
import FoodsExplorer from '../Pages/FoodsExplorer';
import DrinksExplorer from '../Pages/DrinksExplorer';
import FoodIngredients from '../Pages/FoodIngredients';
import DrinksIngredients from '../Pages/DrinkIngredients';
import FoodNacionalities from '../Pages/FoodNationalities';
import Profile from '../Pages/Profile';
import DoneRecipes from '../Pages/DoneRecipes';
import FavoriteRecipes from '../Pages/FavoriteRecipes';
import NotFound from '../Pages/NotFound';
import UserProvider from '../contexts/userContext/UserProvider';

function Routes() {
  return (
    <Switch>
      <Route path="/profile" component={ Profile } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route path="/explore/drinks" component={ DrinksExplorer } />
      <Route path="/explore/foods/nationalities" component={ FoodNacionalities } />
      <Route path="/explore/foods/ingredients" component={ FoodIngredients } />
      <Route path="/explore/foods" component={ FoodsExplorer } />
      <Route path="/explore" component={ Explorer } />
      <Route path="/drinks/:id/in-progress" component={ ProgressDrinkRecipe } />
      <Route path="/drinks/:id" component={ DrinkDetails } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/foods/:id/in-progress" component={ ProgressFoodRecipe } />
      <Route path="/foods/:id" component={ FoodDetails } />
      <Route path="/foods" component={ Foods } />
      <UserProvider>
        <Route exact path="/" component={ Login } />
      </UserProvider>
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
