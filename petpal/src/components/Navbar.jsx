import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart, FaPhone, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
    
        <div className="navbar-top">
          {/* Logo */}
          <div className="navbar-logo">
            <img src="./PetPalLogo.png" height="60px" alt="Supertails Logo" />
            <span>PETPAL</span>
          </div>

          {/* Center Section with Search and Location */}
          <div className="navbar-center">
            <div className="navbar-search">
              <input type="text" placeholder="Search for drools" />
              <button><span role="img" aria-label="search">🔍</span></button>
            </div>

            <div className="navbar-location">
              <FaMapMarkerAlt />
              <span>110001, New Delhi</span>
            </div>
          </div>

          {/* Icons */}
          <div className="navbar-icons">
            <span><FaPhone /></span>
            <span>
              <Link to="/signup"><FaUser /></Link>
            </span>
            <span>
              <FaShoppingCart />
              <span className="cart-count">0</span>
            </span>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="navbar-bottom">
          <a href="#super-treats">Super Treats Sale</a>
          <div className="dropdown">
            <a href="#dogs">Dogs</a>
            <div className="dropdown-content">
              <a href="#dog-food">Food</a>
              <a href="#dog-toys">Toys</a>
              <a href="#dog-accessories">Accessories</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#cats">Cats</a>
            <div className="dropdown-content">
              <a href="#cat-food">Food</a>
              <a href="#cat-toys">Toys</a>
              <a href="#cat-accessories">Accessories</a>
            </div>
          </div>
          <a href="#shop-by-breed">Shop By Breed</a>
          <a href="#henlo">Henlo</a>
          <a href="#consult-vet">Consult a Vet</a>
          <a href="#pharmacy">Pharmacy</a>
          <a href="#lightning-deals">Lightning Deals</a>
        </div>
        
      
    </div>
  );
};

export default Navbar;
