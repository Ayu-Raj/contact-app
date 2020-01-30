import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Info from './components/Info.js';
import Send from './components/Send.js';
import History from './components/History.js';
import Content from './components/Content.js';

class App extends Component {
  render(){
  return (
    <div className="App">
     <Router>
      <Navbar />
      
      
      <Route exact path="/" component={Contact} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/send" component={Send} />
      <Route exact path="/history" component={History} />
      </Router>
     <Footer />
    </div>
  );
  }
}

export default App;
