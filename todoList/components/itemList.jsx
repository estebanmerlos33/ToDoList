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

            <div className="btnContainer">
              <div className="mainBtns">
                <button onClick={() => props.handleClickEditButton(item.id)}>
                  ✎
                </button>

                <button onClick={() => props.removeItem(item.id)}>🗑</button>
              </div>
              <EditionButtons
                btnid={item.id}
                editables={props.editables}
                handleConfirm={props.handleConfirm}
                handleCancel={props.handleCancel}
              ></EditionButtons>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
