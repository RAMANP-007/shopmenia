import React from 'react';
import "./Navbar.css";

function Navbar() {
    return ( 
        <div className="navbar">
          <img src="/images/nav-logo.svg" alt="navlogo" /> 
          <img src="/images/nav-profile.svg" className="nav-profile" alt="User Profile" /> 
        </div>
    );
}

export default Navbar;
