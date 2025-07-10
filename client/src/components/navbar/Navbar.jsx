import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';

const Navbar = () => {
  const { GetTotalCartItems } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
    // Using navigate should be enough, but keeping reload for legacy reasons if needed.
    // window.location.reload(); 
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuActive(false);
  }, [location.pathname]);

  const menuItems = [
    { name: 'Shop', path: '/' },
    { name: 'Men', path: '/mens' },
    { name: 'Women', path: '/womens' },
    { name: 'Kids', path: '/kids' },
  ];

  return (
    <nav className={`navbar-joyful ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo-joyful">
        <img src="/assets/logo.png" alt="Shoper Logo" />
        <p>SHOPER</p>
      </Link>

      <ul className={`nav-menu-joyful ${menuActive ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path} 
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-login-cart-joyful">
        {localStorage.getItem('auth-token') ? (
          <button onClick={handleLogout} className="btn-modern">Logout</button>
        ) : (
          <Link to="/login">
            <button className="btn-modern">Login</button>
          </Link>
        )}
        
        <Link to="/cart" className="nav-cart-container">
          <img src="/assets/cart_icon.png" alt="Cart" />
          <div className="nav-cart-count-joyful">{GetTotalCartItems()}</div>
        </Link>
      </div>

      <button className="nav-menu-toggle" onClick={() => setMenuActive(!menuActive)}>
        &#9776; {/* Hamburger Icon */}
      </button>
    </nav>
  );
};

export default Navbar;