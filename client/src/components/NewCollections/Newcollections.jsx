import React, { useEffect, useState } from 'react';
import './newcollections.css';
import Item from '../item/Item.jsx';

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch('/api/newcollection')
      .then((res) => res.json())
      .then((data) => {
        setNewCollection(data);
      })
      .catch((err) => {
        console.error("Error fetching new collection:", err);
      });
  }, []);

  return (
    <section className="new-collections-modern">
      <div className="new-collections-header">
        <h2>New Collections</h2>
        <p>Discover our latest arrivals and refresh your wardrobe.</p>
      </div>
      <div className="new-collections-grid">
        {newCollection.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  );
};

export default NewCollections;
