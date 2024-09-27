import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom'

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import { PrivateRoute } from "./components/PrivateRoute";
import "./styles.scss";

function App() {

  const logout = localStorage.removeItem('token')

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="/" onClick={logout}>logout</a>
        </header> 
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute path='/bubblePage' component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.