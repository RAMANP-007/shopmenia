import React from 'react';
import './cartitems.css';
import { useContext } from "react";
import { ShopContext } from '../context/Shopcontext.jsx';

function CartItems() {
    const { all_product, cartItems, Removefromcart, GetTotalCartAmount } = useContext(ShopContext); 
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => { 
                if (cartItems[e.id] > 0) {
                    return (
                        <div className="">
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p> 
                                <img className="cartitems-remove-icon" src="/assets/cart_cross_icon.png" onClick={() => { Removefromcart(e.id) }} alt="" />
                            </div>
                        </div>
                    );
                } else {
                    return null; 
                }
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div className="cartitems-total-items">
                        <p>Subtotal</p>
                        <p>${GetTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fees</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <p>${GetTotalCartAmount()}</p>
                </div>
                <button>Proceed to Checkout</button>
            </div>
            
                
        
        
        </div>
        <div className="cartitems-promocode">
            <p>If You Have a PromoCode Enter It Here</p>
            <div className="cartitem-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
        </div>
    );
}

export default CartItems;
