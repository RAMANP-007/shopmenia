import React from 'react';
import "./Sidebar.css";
import {Link} from 'react-router-dom';

function Sidebar () {
    return ( 
     <div className="sidebar">
     <Link to={'/addproduct'} style={{textDecoration:"none"}}>
     <div className="sidebar-item">
        <img src="\images\Product_Cart.svg" alt="" />
        <p> Add Product</p>
     </div>
     </Link>

     <Link to={'/listproduct'} style={{textDecoration:"none"}}>
     <div className="sidebar-item">
        <img src="\images\Product_list_icon.svg" alt="" />
        <p>Product List</p>
     </div>
     </Link>
     
     </div>
     );
}

export default Sidebar ;