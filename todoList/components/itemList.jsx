import './itemList.css'
import React from 'react';

import Item from '../components/item.jsx'



const ItemList = (props) => {
    return (
      <div>
        <ul>
        {props.items.map(item => (
            <li>
                <Item key={item.id} item={item} editItem = {props.editItem} removeItem={props.removeItem} />
            </li>
        ))}
        </ul>
      </div>
    );
  };

export default ItemList;