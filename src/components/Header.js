import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
import { con1, con2 } from '../Data/header.js';

function Header() {

    return (
        <header id="header" role="banner">
        <div className="header__inner">
            <div className='header__inn1'>
                <div className="header__logo">
                    <h1>
                        <a href="/">하루코딩</a>
                    </h1>
                </div>
                <ul>
                    {con1.map((nav, key) => (
                        <li key={key}>
                            <Link to={nav.url}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
          <nav 
            className= 'header__nav'
            role="navigation" 
            aria-label="메인메뉴"
          >
            <ul>
              {con2.map((nav, key) => (
                <li key={key}>
                  <a href={nav.url}>{nav.title}</a>
                </li>
                
              ))}
            </ul>
          </nav>
          
        </div>
      </header>
    );
}

export default Header;
