import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Home from '../src/components/pages/Home'
import About from '../src/components/pages/About'
import Manage from './components/pages/ManageIng'
import BrandRec from './components/pages/BrandRec'
import Recipe from './components/pages/Recipe'


import './App.css'

function App() {
  return (
      <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/manage" component={Manage} />
          <Route exact path="/brandrec" component={BrandRec} />
          <Route exact path="/recipe" component={Recipe} />

      </Router>
  );
}

export default App;
