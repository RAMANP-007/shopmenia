import React, { useContext } from 'react';
import './css/shopcategory.css';
import { ShopContext } from '../context/Shopcontext';
import Item from '../item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img  className="shopcategory-banner" src={props.banner} alt="Category Banner" />
      
      <div className="shopcategory-indexSort">
        <p><span>Showing 1–12</span> Out of 36</p>
        <div className="shopcategory-sort">
          Sort by <img src="/assets/dropdown_icon.png" alt="Dropdown Icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore-more
      </div>
    </div>
  );
};

export default ShopCategory;
