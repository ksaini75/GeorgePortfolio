import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/home-page';
import AboutPage from './Pages/about-page';
import ProjectPage from './Pages/projects-page';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
     <NavigationBar/>
    <Switch>
    <Route  exact path='/' component={HomePage} />
    <Route  exact path='/about' component={AboutPage} />
    <Route  exact path='/projects' component={ProjectPage} />
   {/*  <Route  exact path='/contact' component={ContactPage} /> */}
    </Switch>
    </div>
  );
}

export default App;
