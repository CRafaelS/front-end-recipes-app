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

const Routes = () => (

  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/foods" component={ Foods } />
    <Route path="/drinks" component={ Drinks } />
    <Route path="/foods/:id" component={ FoodDetails } />
    <Route path="/drinks/:id" component={ DrinkDetails } />
    <Route path="/foods/:id/in-progress" component={ ProgressFoodRecipe } />
    <Route path="/drinks/:id/in-progress" component={ ProgressDrinkRecipe } />
    <Route path="/explore" component={ Explorer } />
    <Route path="/explore/foods" component={ FoodsExplorer } />
    <Route path="/explore/drinks" component={ DrinksExplorer } />
    <Route path="/explore/foods/ingredients" component={ FoodIngredients } />
    <Route path="/explore/drinks/ingredients" component={ DrinksIngredients } />
    <Route path="/explore/foods/nationalities" component={ FoodNacionalities } />
    <Route path="//profile" component={ Profile } />
    <Route path="/done-recipes" component={ DoneRecipes } />
    <Route path="/favorite-recipes." component={ FavoriteRecipes } />
    <Route path="*" component={ NotFound } />
  </Switch>);

export default Routes;
