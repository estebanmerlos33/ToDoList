import { useState } from "react";

export const EditionButtons = (props) => {
  const [editInputValue, setEditInputValue] = useState("");
  
  const handleInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleConfirm = (id,editInputValue) => {
    setEditInputValue("");
    props.handleConfirm(id,editInputValue);
  };

  const handleCancel = (id) => {
    setEditInputValue("");
    props.handleCancel(id);
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
            onClick={() => handleConfirm(props.btnid)}
          >
            ✓
          </button>
          <button className="editBtn" onClick={() => handleCancel(props.btnid)}>
            ❌
          </button>
        </div>
      </div>
    )
  );
};
