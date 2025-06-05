import React, { useEffect, useState } from 'react';
import './newcollections.css';
import Item from '../item/Item.jsx';

function Newcollection() {
  const [newcollection, setNewcollection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/newcollection')
      .then((res) => res.json())
      .then((data) => {
        setNewcollection(data);
      })
      .catch((err) => {
        console.error("Error fetching new collection:", err);
      });
  }, []);

  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newcollection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Newcollection;
