import React, { useContext } from 'react';
import './productdisplay.css';
import { ShopContext } from '../context/Shopcontext';


const ProductDisplay = (props) => {
  const { product } = props;
  const { Addtocart } = useContext(ShopContext);

  if (!product) {
    return null; // Don't render if product is not available
  }

  return (
    <div className="product-display-joyful">
      <div className="product-display-left-joyful">
        <div className="product-display-img-list-joyful">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={product.image} alt={`Product preview ${index + 1}`} />
          ))}
        </div>
        <div className="product-display-img-joyful">
          <img src={product.image} className="product-display-main-img-joyful" alt="Main product" />
        </div>
      </div>

      <div className="product-display-right-joyful">
        <h1>{product.name}</h1>
        <div className="product-display-right-star-joyful">
          <img src="/assets/star_icon.png" alt="Star" />
          <img src="/assets/star_icon.png" alt="Star" />
          <img src="/assets/star_icon.png" alt="Star" />
          <img src="/assets/star_icon.png" alt="Star" />
          <img src="/assets/star_dull_icon.png" alt="Star dull" />
          <p>(122)</p>
        </div>

        <div className="product-display-right-prices-joyful">
          <div className="old-price-joyful">${product.old_price}</div>
          <div className="new-price-joyful">${product.new_price}</div>
        </div>

        <div className="product-description-joyful">
          A beautifully crafted piece, perfect for any occasion. Made with the finest materials to ensure comfort and durability.
        </div>

        <div className="select-size-joyful">
          <h2>Select Size</h2>
          <div className="select-size-options-joyful">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button className="btn-modern" onClick={() => Addtocart(product.id)}>ADD TO CART</button>

        <p className="product-display-right-category-joyful">
          <span>Category:</span> {product.category || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
