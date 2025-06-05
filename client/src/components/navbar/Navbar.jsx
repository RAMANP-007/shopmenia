import React, { useContext } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';

const Navbar = () => {
  const { GetTotalCartItems } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const getCurrentMenu = () => {
    if (path === '/') return 'Shop';
    if (path.includes('mens')) return 'Men';  
    if (path.includes('womens')) return 'Women';
    if (path.includes('kids')) return 'Kids';
    return '';
  };

  const menu = getCurrentMenu();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
    setTimeout(() => {
      window.location.reload();
    }, 100); // Small delay
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="/assets/logo.png" alt="Logo" />
        <p>SHOPER</p>
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === 'Shop' && <hr />}
        </li>
        <li>
          <Link to="/kids" style={{ textDecoration: 'none' }}>Kids</Link>
          {menu === 'Kids' && <hr />}
        </li>
        <li>
          <Link to="/mens" style={{ textDecoration: 'none' }}>Men</Link>
          {menu === 'Men' && <hr />}
        </li>
        <li>
          <Link to="/womens" style={{ textDecoration: 'none' }}>Women</Link>
          {menu === 'Women' && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button>Login</button>
          </Link>
        )}
        
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <img src="/assets/cart_icon.png" alt="Cart" />
        </Link>
        <div className="nav-cart-count">{GetTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;