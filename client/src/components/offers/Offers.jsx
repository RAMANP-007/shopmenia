import React from 'react';
import './offers.css';

const Offers = () => {
  return (
    <section className="offers-joyful">
      <div className="offers-left-joyful">
        <h2>Exclusive Offers For You</h2>
        <p>Only on best-selling products. Don't miss out!</p>
        <button className="btn-modern">Check Now</button>
      </div>
      <div className="offers-right-joyful">
        <img src="/assets/exclusive_image.png" alt="Exclusive Offer" />
      </div>
    </section>
  );
};

export default Offers;