import React from 'react';
import '../css/Nav.css';


const Nav = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/" className="logo">KmJoghee's</a>        
        </div>
        <ul>
          <li><a className="nav" href="/">Home</a></li>
          <li><a className="nav" href="/">About Us</a></li>
          <li><a className="nav" href="/">Shop Online</a></li>
          <li><a className="nav" href="/">Contact</a></li>
        </ul>
        <div className="icon">
          <a href="https://www.instagram.com" target="_blank" >
          <i class="fa-brands fa-instagram"></i>
          </a>
          </div>
          <div className="icon1">
          <a href='/'>
          <i class="fa-solid fa-cart-plus"></i>
          
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
