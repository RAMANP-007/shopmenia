import React, { useState } from "react";
import "./Addproduct.css";

function Addproduct() {
  const [image, setImage] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const changeHnadler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const Addproduct = async () => {
    console.log(product);
    let responseData;
    let productDetails = product;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("/api/upload", {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      productDetails.image = responseData.image;
      await fetch("/api/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("product Added") : alert("failed");
        });
    }

    console.log("Final product details:", productDetails);
  };

  const imageHandler = async (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={product.name}
          onChange={changeHnadler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            value={product.old_price}
            onChange={changeHnadler}
            name="old_price"
            placeholder="Type Here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            value={product.new_price}
            onChange={changeHnadler}
            name="new_price"
            placeholder="Type Here"
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name="category"
          value={product.category}
          onChange={changeHnadler}
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : "/images/upload_area.svg"}
            className="addproduct-thumbnail-img"
            alt="Upload Preview"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button
        className="addproduct-buttton"
        onClick={() => {
          Addproduct();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Addproduct;
