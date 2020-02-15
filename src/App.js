import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Home from '../src/components/pages/Home'
import About from '../src/components/pages/About'


import './App.css'

function App() {
  return (
      <Router>
        <div className="test">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
  );
}

export default App;
