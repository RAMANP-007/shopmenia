import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, new_price, old_price }) => {
  const handleImageClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="item-joyful">
      <Link to={`/product/${id}`} onClick={handleImageClick} className="item-image-joyful">
        <img src={image} alt={name || 'Product'} />
      </Link>
      <div className="item-details-joyful">
        <h3>{name || 'Product Title'}</h3>
        <div className="item-prices-joyful">
          <p className="item-price-new-joyful">${new_price}</p>
          <p className="item-price-old-joyful">${old_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
