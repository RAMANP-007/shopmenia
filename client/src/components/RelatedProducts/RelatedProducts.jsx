import React from 'react';
import './relatedproducts.css';
import data_product from '../assets/data';
import Item from '../item/Item';

const RelatedProducts = () => {
  return (
    <div className="related-products-joyful">
      <h2>You Might Also Like</h2>
      <div className="related-products-grid-joyful">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;