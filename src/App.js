import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Home from '../src/components/pages/Home'
import './App.css'

function App() {
  return (
    <div className="test">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
