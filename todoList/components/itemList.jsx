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
              <button onClick={() => props.editItem()}>✎</button>

              <button
                className="editMode"
                onClick={() => props.confirm(item.id)}
              >
                ✓
              </button>
              <button
                className="editMode"
                onClick={() => props.cancel(item.id)}
              >
                ✖
              </button>

              <button onClick={() => props.removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
