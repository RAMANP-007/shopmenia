import React, { useState } from 'react';
import './descriptionbox.css';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="description-box-joyful">
      <div className="description-box-navigator-joyful">
        <div
          className={`description-box-nav-item-joyful ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`description-box-nav-item-joyful ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (122)
        </div>
      </div>
      <div className="description-box-content-joyful">
        {activeTab === 'description' ? (
          <div>
            <p>
              Discover the perfect blend of style and comfort with our latest collection. Each piece is crafted with meticulous attention to detail, using high-quality materials to ensure a premium feel and long-lasting durability. Whether you're dressing up for a special occasion or looking for everyday essentials, our products are designed to fit seamlessly into your lifestyle.
            </p>
            <p>
              Our e-commerce platform provides a seamless shopping experience, allowing you to browse and purchase with ease. We are committed to delivering excellence, from our product design to our customer service.
            </p>
          </div>
        ) : (
          <div>
            <p>See what our customers are saying! (Reviews feature coming soon).</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
