import "./itemList.css";
import { React } from "react";
import { EditionButtons } from "./editionButtons";

const ItemList = (props) => {
  const handleConfirm = () => {
    props.handleConfirm();
  };

  const handleCancel = () => {
    props.handleCancel();
  };

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
                handleConfirm={handleConfirm}
                handleCancel={handleCancel}
              ></EditionButtons>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
