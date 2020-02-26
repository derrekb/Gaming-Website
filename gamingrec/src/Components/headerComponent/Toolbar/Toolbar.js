import React from 'react';

import './Toolbar.css';

const toolbar = props => (
    <header className = "toolbar">
        <nav className = "toolbar_navigation">
            <div>

            </div>
            <div className = "toolbar_logo">
                <a href ="/">GMRZ</a>
            </div>
            <div className = "toolbar_nav_items">
                <ul>
                    <li>
                        <a href = "/">
                            Sign In
                        </a>
                        
                    </li>
                    <li>
                        <a href = "/">
                            My Profile
                        </a>
                    </li>

                </ul>

            </div>

        </nav>
    </header>
);

export default toolbar;