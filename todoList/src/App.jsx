import './App.css'
import { useState } from 'react';
import ItemList from '../components/itemList'

function App() {

  const [DUMMY_ITEMS, setItemList] = useState([
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' },
  ]);
  
  const addItem = (newItem) => {
    // Update the itemList by adding a new item
    
    console.log("Add Button Pressed")
    setItemList([...DUMMY_ITEMS, newItem]);
  };
  
  const removeItem = (itemId) => {
    console.log("Remove Button Pressed")
    // Update the itemList by removing an item based on its ID
    const updatedItemList = DUMMY_ITEMS.filter((item) => item.id !== itemId);
    setItemList(updatedItemList);
  };
  const editItem  = (itemId,value) => {
    console.log("Edit Button Pressed")
    // Update the itemList by removing an item based on its ID
    //const updatedItemList = itemList.filter((item) => item.id !== itemId);
    //setItemList(updatedItemList);
  };

  return (
    <>

      <div>
        <ItemList items = {DUMMY_ITEMS} addItem = {addItem} removeItem= {removeItem} editItem = {editItem}></ItemList>
      </div>
      
    </>
  )
}

export default App;
