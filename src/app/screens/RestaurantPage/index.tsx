import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ChosenDish } from "./chosenDish";
import { AllRestaurants } from "./allRestaurants";
import { OneRestaurant } from "./oneRestaurant";
import "../../../css/restaurant.css"


export function RestaurantPage() {
    const restaurant = useRouteMatch();
    console.log(restaurant)
  return (
    <div className="restaurant_page">
      <Switch>
        <Route path={`${restaurant.path}/dish/:dish_id`}>
            <ChosenDish/>
        </Route>
        <Route path={`${restaurant.path}/:restaurant_id`}>
        <OneRestaurant />
        </Route>
        <Route path={`${restaurant.path}`}>
            <AllRestaurants/>
        </Route>
      </Switch>
    </div>
  );
}
