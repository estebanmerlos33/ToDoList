import "./App.css";
import { useEffect, useState, useRef } from "react";
import ItemList from "../components/itemList";
import NewTodo from "../components/newTodo";
import {getTodos, getRefDB, addTodo} from "./dbconnection.jsx"
import { get } from "firebase/database";
function App() {
  
  const [TODO_ITEMS, setItemList] = useState([]);
  const [globalId, setGlobalId] = useState(4);
  const prevTodoList = useRef();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosRef = getRefDB();
        const snapshot = await get(todosRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const todosArray = Object.values(data);

          setItemList(todosArray);
        } else {
          setItemList([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTodos();
  }, []);
  
/*
  useEffect(() => {
  console.log("EFFECT TODO ITEMS");


  // Define a function to fetch and update data
  const fetchData = async () => {
    try {
      const newTodoData = await getTodos(); // Fetch the new data
      if (isFetching) {
        setItemList(newTodoData); // Set the new data if fetch is still in progress
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData(); // Call the function immediately
}, [TODO_ITEMS]);
*/
  const addItem = async (inputValue) => {
    setGlobalId(globalId + 1);
    addTodo(globalId,inputValue)
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
        <NewTodo addItem={addItem}>NuevoTodo</NewTodo>
      </div>
    </>
  );
}

export default App;
