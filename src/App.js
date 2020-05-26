import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
  <a class="navbar-brand" href="">
    <img src="images/header.jpg" alt="Logo" />
  </a>

  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#Recipes">Recipes</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Technology">Technology</a>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Miscellaneous
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
  </ul>
</nav>

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
