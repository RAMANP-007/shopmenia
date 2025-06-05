import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, image, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={image} alt="Product" onClick={window.scrollTo(0,0)}/>
      </Link>
      <div className="item-prices">
        <p className="new-price">${new_price}</p>
        <p className="old-price">${old_price}</p>
      </div>
    </div>
  );
};

export default Item;
