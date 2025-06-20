import React from 'react';
import './popular.css';
import Item from '../item/Item.jsx';
import data_product from '../assets/data.js';

const Popular = () => {
  return (
    <section className="popular-joyful">
      <div className="popular-header-joyful">
        <h2>Popular in Women</h2>
        <p>Check out our most-loved styles from the women's collection.</p>
      </div>
      <div className="popular-items-joyful">
        {data_product.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;