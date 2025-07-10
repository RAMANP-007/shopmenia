import React, { useContext } from 'react';
import './css/shopcategory.css';
import { ShopContext } from '../context/Shopcontext';
import Item from '../item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category-joyful">
      <img className="shop-category-banner-joyful" src={props.banner} alt="Category Banner" />
      
      <div className="shop-category-index-sort-joyful">
        <p>
          <span>Showing 1–12</span> out of 36 products
        </p>
        <div className="shop-category-sort-joyful">
          Sort by <img src="/assets/dropdown_icon.png" alt="Dropdown Icon" />
        </div>
      </div>

      <div className="shop-category-products-joyful">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
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
      <div className="shop-category-load-more-joyful">
        <button className="btn-modern">Load More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
