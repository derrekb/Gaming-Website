import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './Components/headerComponent/header';
import Footer from './Components/headerComponent/footerComponent/footer';
import HomePage from './Components/headerComponent/pages/homePage';
import MyPlayedGames from './Components/headerComponent/pages/MyPlayedGames';
import Toolbar from './Components/headerComponent/Toolbar/Toolbar';
import  login from './Components/headerComponent/pages/login';

import './scss/default.scss';
  

//put in the div

function App() {
  return (
    <Router>
    <div className="App">
   
       <Header/>
        <Route exact path = '/login' component = {login} />
       <Route exact path='/' component={HomePage} />
       <Route exact path='/MyPlayedGames' component={MyPlayedGames} />

      
    </div>
    </Router>
  );
}

export default App;
