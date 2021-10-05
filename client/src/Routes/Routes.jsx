import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Navbar from "../Components/NavBar/NavBar";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
