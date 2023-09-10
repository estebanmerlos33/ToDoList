import "./itemList.css";
import { React } from "react";

const ItemList = (props) => {
  return (
    <div className="itemList">
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <div>{item.value}</div>

            <div>
              <button onClick={() => props.editItem(item.id)}>Edit</button>
              <button onClick={() => props.removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
