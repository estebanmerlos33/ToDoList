import "./App.css";
import { useState } from "react";
import ItemList from "../components/itemList";
import NewTodo from "../components/newTodo";

function App() {
  const [DUMMY_ITEMS, setItemList] = useState([
    { id: 1, value: "Item 1" },
    { id: 2, value: "Item 2" },
    { id: 3, value: "Item 3" },
  ]);
  const [globalId, setGlobalId] = useState(4);

  const addItem = (inputValue) => {
    // Update the itemList by adding a new item
    setItemList([...DUMMY_ITEMS, { id: globalId, value: inputValue }]);
    setGlobalId(globalId + 1);

    console.log(DUMMY_ITEMS);
  };

  const removeItem = (itemId) => {
    console.log("Remove Button Pressed");
    console.log(itemId);
    // Update the itemList by removing an item based on its ID
    const updatedItemList = DUMMY_ITEMS.filter((item) => item.id !== itemId);
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
          items={DUMMY_ITEMS}
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
