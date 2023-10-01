import "./itemList.css";
import { React } from "react";
import { EditionButtons } from "./editionButtons";

const ItemList = (props) => {
  return (
    <div className="itemList">
      <ul>
        {props.items.map((item) => (
          <div key={item.id} className="item">
            <li key={item.id}>
              <div className="todoValue">{item.value}</div>

              <div className="btnContainer">
                <div className="mainBtns">
                  <button
                    className="editBtn"
                    onClick={() => props.handleClickEditButton(item.id)}
                  >
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
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
