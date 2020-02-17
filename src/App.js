import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Home from '../src/components/pages/Home'
import About from '../src/components/pages/About'
import Manage from './components/pages/ManageIng'
import Test from '../src/components/test'



import './App.css'

function App() {
  return (
      <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/manage" component={Manage} />
        {/* <Route exact path="/brandrec" component={Test} /> */}
      </Router>
  );
}

export default App;
