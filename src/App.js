import React from 'react';
import logo from './logo.svg';import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import QuickCoachingApp from './components/pages/projects/quickcoachingapp/QuickCoachingApp';
import CookingApp from './components/pages/projects/cookingapp/CookingApp';
import Adas from './components/pages/projects/adas/Adas';

import {HashRouter, Route,Switch} from 'react-router-dom' 

import './App.css';


function App() {
  return (
    <HashRouter>
    
    <Navbar />
   
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/qickcoachingapp' component={QuickCoachingApp}/>
      <Route path='/cookingapp' component={CookingApp}/>
      <Route path='/adas' component={Adas}/>
    
    </Switch>



  </HashRouter>

  );
}

export default App;
