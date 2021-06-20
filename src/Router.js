import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import{Home} from "./components/Home"
import{Login} from "./components/Login"
import{Register} from "./components/Register"
import{Welcome} from "./components/Welcome"


export default function Router() {

  return (
    <BrowserRouter>
      <Switch>
      
        <Route exact path="/">
          <Home />
        </Route>
      
        <Route exact path="/Login">
          <Login />
        </Route>
      
        <Route exact path="/Register">
          <Register />
        </Route>

        <Route exact path="/welcome/:name">
          <Welcome />
        </Route>
      
      
      </Switch>
    </BrowserRouter>
  );
}