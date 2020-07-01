import React from 'react';
import './App.css';
import Recipes from './components/Recipes/Recipes'
import Home from './components/Home/Home'
import Technology from './components/Technology/Technology'
import Hockey from './components/Hockey/Hockey'
import Boarding from './components/Boarding/Boarding'
import Misc from './components/Misc/Misc'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Route path='/' exact={true} component={Home} />
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <a class="navbar-brand" href="/Home">
          <img src="images/header.jpg" alt="Logo" />
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/Recipes">Recipes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Technology">Technology</a>
          </li>

        </ul>
        </nav>

      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Recipes" component={Recipes} />
        <Route path="/Technology" component={Technology} />
        <Route path="/Hockey" component={Hockey} />
        <Route path="/Boarding" component={Boarding} />
        <Route path="/Misc" component={Misc} />
      </Switch>
    </Router>
  </header> 
</div>
  );
}

export default App;
