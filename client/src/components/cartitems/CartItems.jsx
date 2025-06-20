import React, { useContext } from 'react';
import './cartitems.css';
import { ShopContext } from '../context/Shopcontext.jsx';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, Removefromcart, GetTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cart-items-joyful">
      <div className="cart-items-header-joyful">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="cart-item-row-joyful">
              <div className="cart-item-product-joyful">
                <img src={product.image} alt={product.name} />
              </div>
              <p>{product.name}</p>
              <p className="cart-item-price-joyful" data-label="Price">${product.new_price}</p>
              <button className="cart-item-quantity-joyful" data-label="Quantity">{cartItems[product.id]}</button>
              <p className="cart-item-total-joyful">${product.new_price * cartItems[product.id]}</p>
              <img
                className="cart-item-remove-joyful"
                src={remove_icon}
                onClick={() => Removefromcart(product.id)}
                alt="Remove Item"
              />
            </div>
          );
        }
        return null;
      })}

      <div className="cart-summary-joyful">
        <div className="cart-totals-joyful">
          <h3>Cart Totals</h3>
          <div>
            <div className="cart-total-item-joyful">
              <p>Subtotal</p>
              <p>${GetTotalCartAmount()}</p>
            </div>
            <div className="cart-total-item-joyful">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="cart-total-item-joyful">
              <h4>Total</h4>
              <h4>${GetTotalCartAmount()}</h4>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promo-joyful">
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promo-box-joyful">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
