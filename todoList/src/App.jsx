import "./App.css";
import { useEffect, useState, useRef } from "react";
import ItemList from "../components/itemList";
import NewTodo from "../components/newTodo";
import {getTodos, getRefDB, addTodo} from "./dbconnection.jsx"
import { get } from "firebase/database";
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
    setItemList([...TODO_ITEMS,{id:globalId, value: inputValue}])
    let aux = await getTodos();
    console.log(aux)
  };

  const removeItem = (itemId) => {
    console.log("Remove Button Pressed");
    console.log(itemId);
    const updatedItemList = TODO_ITEMS.filter((item) => item.id !== itemId);
    setItemList(updatedItemList);
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
