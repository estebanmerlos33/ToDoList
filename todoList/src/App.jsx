import "./App.css";
import { useEffect, useState, useRef } from "react";
import ItemList from "../components/itemList";
import NewTodo from "../components/newTodo";
import { getTodos, addTodo, removeTodo } from "./dbconnection.jsx";
function App() {
  const [TODO_ITEMS, setItemList] = useState([]);
  const [globalId, setGlobalId] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodos();
        const todosArray = Object.values(data);
        if (todosArray.length === 0) {
          setItemList([]);
        } else {
          setItemList(todosArray);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const validateAlfaNumChars = (input) => {
    return /^(?:\d|\w| )*$/g.test(input);
  };

  const addItem = async (inputValue) => {
    if (!validateAlfaNumChars(inputValue))
      alert("Please enter alphanumeric characters only.");
    else {
      setGlobalId(globalId + 1);
      addTodo(globalId, inputValue);
      setItemList([
        ...TODO_ITEMS,
        { id: globalId.toString(), value: inputValue },
      ]);
      let aux = await getTodos();
    }
  };

  const removeItem = async (idToRemove) => {
    const updatedItemList = TODO_ITEMS.filter((item) => item.id !== idToRemove);
    setItemList(updatedItemList);

    await removeTodo(idToRemove);
  };

  const toggleVisibilityEditButtons = () => {
    var elements = document.getElementsByClassName("editMode");

    Object.values(elements).map((e) => {
      if (
        (e.style.display !== "inline" && e.style.display !== "none") ||
        e.style.display === "none"
      )
        e.style.display = "inline";
      else if ((e.style.display = "inline")) e.style.display = "none";
    });
  };

  const handleClickEditButton = () => {
    toggleVisibilityEditButtons();
    console.log("Edit Button Pressed");
  };

  return (
    <>
      <div className="container">
        <ItemList
          items={TODO_ITEMS}
          addItem={addItem}
          removeItem={removeItem}
          editItem={handleClickEditButton}
        ></ItemList>
        <NewTodo addItem={addItem}>Nuevo Todo</NewTodo>
      </div>
    </>
  );
}

export default App;
