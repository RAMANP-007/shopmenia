import React, { useContext } from 'react';
import './productdisplay.css';
import { ShopContext } from '../context/Shopcontext';


function ProductDisplay(props) {
    const { product } = props;
    const { Addtocart, Removefromcart } = useContext(ShopContext);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={product.image} alt={`Product preview ${index + 1}`} />
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} className="productdisplay-main-img" alt="Main product" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src="/assets/star_icon.png" alt="Star" />
                    <img src="/assets/star_icon.png" alt="Star" />
                    <img src="/assets/star_icon.png" alt="Star" />
                    <img src="/assets/star_icon.png" alt="Star" />
                    <img src="/assets/star_dull_icon.png" alt="Star dull" />
                    <p>122</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="old-price">${product.old_price}</div>
                    <div className="new-price">${product.new_price}</div>
                </div>

                <div className="product-description">
                    Very good product
                </div>

                <div className="select-size">
                    <h1>Select Size</h1>
                    <div className="select-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>

                <button onClick={() => Addtocart(product.id)}>ADD TO CART</button>
    

                <p className="productdisplay-right-category"><span>Category:</span> {product.category || 'N/A'}</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
