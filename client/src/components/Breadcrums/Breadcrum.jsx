import React from 'react';
import './Breadcrum.css';

const Breadcrum = ({ product }) => {
  if (!product) return null;

  const { category, name } = product;

  return (
    <nav className="breadcrum-joyful" aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        <li><a href="/">Home</a></li>
        <span className="separator">{'>'}</span>
        <li><a href="/shop">Shop</a></li>
        {category && (
          <>
            <span className="separator">{'>'}</span>
            <li><a href={`/shop/${category.toLowerCase()}`}>{category}</a></li>
          </>
        )}
        {name && (
          <>
            <span className="separator">{'>'}</span>
            <li className="active">{name}</li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrum;
