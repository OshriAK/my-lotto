import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>MyLotto</h2>
      </div>

      {/* links */}
      <ul className="navbar__links">
        <li>
          <NavLink to="/" className="cart__link" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="cart__link" activeClassName="active">
            Cart
          </NavLink>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
