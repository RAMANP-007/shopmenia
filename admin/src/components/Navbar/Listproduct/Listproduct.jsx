import React, { useState, useEffect } from 'react';
import './Listproduct.css';

function Listproduct() {
  const [allProducts, setAllProducts] = useState([]);

  const getInfo = async () => {
    try {
      const res = await fetch('/api/allproducts');
      const data = await res.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  const RemoveProduct = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch('/api/deleteproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: _id }),
      });

      const data = await res.json();
      if (data.success) {
        await getInfo();
        alert("Product deleted successfully.");
      } else {
        alert("Failed to delete product.");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Something went wrong while deleting.");
    }
  };

  return (
    <>
      <div className="list-product">
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="list-product-all-product">
          <hr />
          {allProducts.map((product, index) => (
            <div key={index} className="listproduct-format-main listproduct-format">
              <img
                src={product.image}
                alt="Product"
                className="listproduct-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                src="/images/cross_icon.png"
                alt="Remove"
                onClick={() => RemoveProduct(product._id)}
                className="listproduct-remove-icon"
              />
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}

export default Listproduct;
