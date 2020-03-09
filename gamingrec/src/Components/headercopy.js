import React from 'react';
import {
  
    Link
  } from 'react-router-dom';
 


  
function Header() {
  return (
    <header>
      <div className = "transbox">
        <div className="logo">
        
        <Link to="/Homepage"> GMRZ</Link>
        
        </div>

        <nav>
            <ul>
              <li className = "Search">
                Search:
                <input type = "text"/>
              </li>

                <li className="first">
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/MyPlayedGames">My Played Games</Link>
                    
                </li>
                <li>
                  <Link to = "/login"> Login </Link>
                </li>
                
            </ul>
        </nav>
        </div>
    </header>
  );
}

export default Header;
