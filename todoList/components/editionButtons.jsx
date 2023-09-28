import { useState } from "react";

export const EditionButtons = (props) => {
  const [editInputValue, setEditInputValue] = useState("");
  const handleInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  return (
    props.editables.includes(props.btnid) && (
      <div className="editContainer">
        <input
          value={editInputValue}
          onChange={(e) => handleInputChange(e)}
          placeholder="Edit ToDo"
        ></input>
        <div className="editBtnContainer">
          <button
            className="editBtn"
            btnid={props.btnid}
            onClick={() => props.handleConfirm(props.id)}
          >
            ✓
          </button>
          <button
            className="editBtn"
            btnid={props.btnid}
            onClick={() => props.handleCancel(props.id)}
          >
            ❌
          </button>
        </div>
      </div>
    )
  );
};
