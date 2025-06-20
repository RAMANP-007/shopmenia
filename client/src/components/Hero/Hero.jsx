import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-joyful">
      <div className="hero-content-joyful">
        <h1>Discover Your Signature Style</h1>
        <p>
          Explore our curated collection of fashion-forward apparel and accessories, designed to elevate your wardrobe for every occasion.
        </p>
        <div className="hero-cta-joyful">
          <Link to="/mens">
            <button className="btn-modern">Shop Men</button>
          </Link>
          <Link to="/womens">
            <button className="btn-modern btn-secondary">Shop Women</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
