import React from 'react';
import {
  
    Link
  } from 'react-router-dom';


function Header() {
  return (
    <header>
        <div className="logo">
        GMRZ
        </div>

        <nav>
            <ul>
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
    </header>
  );
}

export default Header;
