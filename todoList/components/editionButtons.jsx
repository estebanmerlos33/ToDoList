import { useState } from "react";

export const EditionButtons = (props) => {
  const [editInputValue, setEditInputValue] = useState("");

  const handleInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleCancel = (id) => {
    setEditInputValue("");
    props.handleCancel(id);
  };

  return (
    props.editables.includes(props.btnid) && (
      <div className="editContainer">
        <div>
          <input
            value={editInputValue}
            onChange={(e) => handleInputChange(e)}
            placeholder="Edit ToDo"
          ></input>
        </div>
        <div className="editBtnContainer">
          <button
            className="confirmBtn"
            onClick={() => props.handleConfirm(props.btnid, editInputValue)}
          >
            ✓
          </button>
          <button onClick={() => handleCancel(props.btnid)}>❌</button>
        </div>
      </div>
    )
  );
};
