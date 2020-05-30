import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from '../src/components/Recipes'
import Home from '../src/components/Home'
import Technology from '../src/components/Technology'
import Hockey from '../src/components/Hockey'
import Boarding from '../src/components/Boarding'
import Misc from '../src/components/Misc'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
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

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Sports
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="/Hockey">Hockey</a>
        <a class="dropdown-item" href="/Boarding">Boarding</a>
        <a class="dropdown-item" href="/Misc">Miscellaneous</a>
      </div>
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


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Toaster Strudel</code>
        </p>
        <a
          className="App-link"
          href="https://linkedin.com/in/grantlal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dis My LinkedIn
        </a>

      </header>
      <body>
      <div class="container">
  <div class="jumbotron">
    <h1>Just a Jumbo to mess with page length</h1>      
  </div>     
</div>
      </body>
      
    </div>
  );
}

export default App;
