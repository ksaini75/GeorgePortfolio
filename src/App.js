import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/home-page';
import AboutPage from './Pages/about-page';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route  exact path='/' component={HomePage} />
    <Route  exact path='/about' component={AboutPage} />
   {/*  <Route  exact path='/contact' component={ContactPage} /> */}
    </Switch>
    </div>
  );
}

export default App;
