import React from 'react';
import Hero from '../Hero/Hero';
import Popular from '../popular/Popular';
import Offers from '../offers/Offers';
import Newcollection from '../NewCollections/Newcollections';
import Newsletter from '../NewsLetter/Newsletter';

const Shop = () => {
  return (
    <div className='shop'>
      <Hero/>
      <Popular/>
      <Offers />
      <Newcollection />
      <Newsletter />
    </div>
  );
};

export default Shop;
