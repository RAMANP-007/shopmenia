import React from 'react';
import './breadcrum.css';

const Breadcrum = (props) => {
  const { product } = props;

  if (!product) {
    return null; // Don't render if there's no product
  }

  return (
    <div className="breadcrum-joyful">
      <span>HOME</span>
      <span className="separator">{'>'}</span>
      <span>SHOP</span>
      <span className="separator">{'>'}</span>
      <span>{product.category}</span>
      <span className="separator">{'>'}</span>
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;