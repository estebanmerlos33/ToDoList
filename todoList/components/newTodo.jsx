import { useState } from "react";
const NewTodo = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleClickButton = () => {
    if (inputValue !== "") {
      props.addItem(inputValue);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="New ToDo"
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      ></input>
      <button onClick={handleClickButton}>➕</button>
    </div>
  );
};

export default NewTodo;
