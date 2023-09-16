import "./App.css";
import { useEffect, useState } from "react";
import ItemList from "../components/itemList";
import NewTodo from "../components/newTodo";
import {getTodos, getRefDB} from "./dbconnection.jsx"
import { get } from "firebase/database";
function App() {
  
  const [TODO_ITEMS, setItemList] = useState([]);
  const [globalId, setGlobalId] = useState(4);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosRef = getRefDB();
        const snapshot = await get(todosRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          // Convert the data into an array (or any iterable format)
          const todosArray = Object.values(data);

          setItemList(todosArray);
        } else {
          setItemList([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchTodos function to fetch data when the component mounts
    fetchTodos();
  }, []);

  /*
  const [DUMMY_ITEMS, setItemList] = useState([
    { id: 1, value: "Item 1" }, 
    { id: 2, value: "Item 2" },
    { id: 3, value: "Item 3" },
  ]);
  */

  const addItem = async (inputValue) => {
    // Update the itemList by adding a new item
    setItemList([...TODO_ITEMS, { id: globalId, value: inputValue }]);

    //setItemList([...TODO_ITEMS, { id: globalId, value: inputValue }]);
    setGlobalId(globalId + 1);

    let aux = await getTodos();
    console.log(aux)


  };

  const removeItem = (itemId) => {
    console.log("Remove Button Pressed");
    console.log(itemId);
    // Update the itemList by removing an item based on its ID
    const updatedItemList = TODO_ITEMS.filter((item) => item.id !== itemId);
    setItemList(updatedItemList);
  };
  const editItem = (itemId, value) => {
    console.log("Edit Button Pressed");
    // Update the itemList by removing an item based on its ID
    //const updatedItemList = itemList.filter((item) => item.id !== itemId);
    //setItemList(updatedItemList);
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
