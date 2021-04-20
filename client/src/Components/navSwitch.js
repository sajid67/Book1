import {
    Switch,Route
  } from "react-router-dom";
import { Cartjs } from "./Cart";
  import { Homejs } from './Home';
import { Productsjs } from './Products';
export const NavSwitch=()=>
{
    return(
        <Switch>
        <Route exact path="/">
        <Homejs/>
        </Route>
        <Route path="/items">
        <Productsjs/>
        </Route>
        <Route path="/cart">
        <Cartjs/>
        </Route>
      </Switch>
    )
}