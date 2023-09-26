import "./itemList.css";
import { React } from "react";
import { EditionButtons } from "./editionButtons";

const ItemList = (props) => {
  return (
    <div className="itemList">
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <div>{item.value}</div>

            <div>
              <button
                key={item.id}
                onClick={() => props.handleClickEditButton(item.id)}
              >
                ✎
              </button>

              <button
                btnid={item.id}
                className="editMode"
                onClick={() => props.confirm(btnId)}
              >
                ✓
              </button>
              <button
                btnid={item.id}
                className="editMode"
                onClick={() => props.cancel(btnId)}
              >
                ❌
              </button>

              <button onClick={() => props.removeItem(item.id)}>🗑</button>
              <EditionButtons
                id={item.id}
                editables={props.editables}
              ></EditionButtons>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
