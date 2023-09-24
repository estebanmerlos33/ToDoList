import "./App.css";
import { useEffect, useState, useRef } from "react";
import ItemList from "../components/itemList";
import NewTodo from "../components/newTodo";
import {getTodos, addTodo, removeTodo} from "./dbconnection.jsx"
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

  const addItem = async (inputValue) => {
    setGlobalId(globalId + 1);
    addTodo(globalId,inputValue)
    setItemList([...TODO_ITEMS,{id:globalId.toString(), value: inputValue}])
    let aux = await getTodos();
  };

  const removeItem = async (idToRemove) => {
    console.log("Remove Button Pressed");
    const updatedItemList = TODO_ITEMS.filter((item) => item.id !== idToRemove);
    setItemList(updatedItemList);
    
    await removeTodo(idToRemove)
  };

  const editItem = (itemId, value) => {
    console.log("Edit Button Pressed");
  };

  return (
    <>
      <div className="container">
        <ItemList
          items={TODO_ITEMS}
          addItem={addItem}
          removeItem={removeItem}
          editItem={editItem}
        ></ItemList>
        <NewTodo addItem={addItem}>Nuevo Todo</NewTodo>
      </div>
    </>
  );
}

export default App;
