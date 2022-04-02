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
import FoodNationalities from '../Pages/FoodNationalities';
import Profile from '../Pages/Profile';
import DoneRecipes from '../Pages/DoneRecipes';
import FavoriteRecipes from '../Pages/FavoriteRecipes';
import NotFound from '../Pages/NotFound';
import MealsAndDrinksProvider from '../context/MealsAndDrinksProvider';

const Routes = () => (
  <MealsAndDrinksProvider>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods/:id/in-progress" component={ ProgressFoodRecipe } />
      <Route exact path="/drinks/:id/in-progress" component={ ProgressDrinkRecipe } />
      <Route exact path="/foods/:id" render={ (props) => <FoodDetails { ...props } /> } />
      <Route
        exact
        path="/drinks/:id"
        render={ (props) => <DrinkDetails { ...props } /> }
      />
      <Route exact path="/explore" component={ Explorer } />
      <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/foods/ingredients" component={ FoodIngredients } />
      <Route exact path="/explore/foods/nationalities" component={ FoodNationalities } />
      <Route exact path="/explore/foods" component={ FoodsExplorer } />
      <Route exact path="/explore/drinks" component={ DrinksExplorer } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  </MealsAndDrinksProvider>
);

export default Routes;
