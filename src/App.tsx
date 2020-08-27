import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/portfolio/about" component={About}/>
          <Route path="/portfolio/projects" component={Projects}/>
          <Route path="/portfolio/contact" component={Contact}/>
          <Route path='/portfolio/' component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
