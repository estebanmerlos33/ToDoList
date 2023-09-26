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
              <button onClick={() => props.handleClickEditButton(item.id)}>
                ✎
              </button>

              <button onClick={() => props.removeItem(item.id)}>🗑</button>
              <EditionButtons
                btnid={item.id}
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
