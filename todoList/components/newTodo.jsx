import { useState } from "react";
const NewTodo = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleClickButton = () => {
    if(inputValue!== ""){
      props.addItem(inputValue);
      setInputValue("");
    }
    console.log("handle click button");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("handleChange");
  };
  return (
    <div>
      <input
        placeholder="New ToDo"
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      ></input>
      <button onClick={handleClickButton}>Add ToDo</button>
    </div>
  );
};

export default NewTodo;
