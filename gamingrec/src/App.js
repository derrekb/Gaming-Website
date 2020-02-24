import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './headerComponent/header';
import Footer from './headerComponent/footerComponent/footer';
import HomePage from './headerComponent/pages/homePage';
import MyPlayedGames from './headerComponent/pages/MyPlayedGames';

import './scss/default.scss';
  



function App() {
  return (
    <Router>
    <div className="App">
       
       <Header/>

       <Route exact path='/' component={HomePage} />
       <Route exact path='/MyPlayedGames' component={MyPlayedGames} />

      
    </div>
    </Router>
  );
}

export default App;
