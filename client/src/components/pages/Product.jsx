import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrums/Breadcrum';
import ProductDisplay from '../productdisplay/ProductDisplay';
import DescriptionBox from '../descriptionbox/DescriptionBox';
import Relatedproducts from '../RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox /> 
      <Relatedproducts />
    </div>
  );
};

export default Product;
