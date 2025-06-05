import React from 'react';
import './popular.css';
import Item from '../item/Item.jsx';
import data_product from '../assets/data.js';


function Popular() {
    return ( <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item, i) => {
                return < Item key={i} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
               
            })}
        </div>
    </div>  );
}

export default Popular;