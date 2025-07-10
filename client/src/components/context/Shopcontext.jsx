import React, { createContext, useState, useEffect } from "react";
import all_product from "../assets/all_product.js";

export const ShopContext = createContext(null);

const GetDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [allproduct, setAllproduct] = useState([]);
  const [cartItems, setCartItems] = useState(GetDefaultCart());

  useEffect(() => {
    fetch('/api/allproducts')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setAllproduct(data);
    })
    .catch((error) => {
      console.error("Error fetching all products:", error);
      // Optionally, set products to an empty array or show an error state
      // setAllproduct([]); 
    });
  },[])

  const Addtocart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(updated);
      return updated;
    });
  };

  const Removefromcart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const GetTotalCartAmount = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalamount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalamount;
  };

  const GetTotalCartItems = () => { 
    let totalitems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalitems += cartItems[item];
      }
    }
    return totalitems; 
  };

  const contextValue = { GetTotalCartAmount, all_product, cartItems, Addtocart, Removefromcart, GetTotalCartItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
