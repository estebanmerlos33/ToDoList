import "./App.css";
import { useEffect, useState } from "react";
import ItemList from "../components/itemList";
import NewTodo from "../components/newTodo";
import { getTodos, addTodo, removeTodo, updateTodo } from "./dbconnection.jsx";

function App() {
  const [TODO_ITEMS, setItemList] = useState([]);
  const [globalId, setGlobalId] = useState(0);
  const [editableItems, setEditableItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodos();
        if (data === null || data === undefined) setItemList([]);
        else {
          const todosArray = Object.values(data);
          if (todosArray.length === 0) {
            setItemList([]);
          } else {
            setItemList(todosArray);
            let maxId = todosArray
              .map((todo) => todo.id)
              .sort((a, b) => b - a)[0];
            if (maxId === null && maxId === undefined) setGlobalId(0);
            else setGlobalId(parseInt(maxId) + 1);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const validateAlfaNumChars = (input) => {
    return /^(?:\d|\w|á|é|í|ó|ú|ñ| )*$/g.test(input);
  };

  const addItem = async (inputValue) => {
    if (inputValue === "") alert("The input should not be empty.");
    else {
      if (!validateAlfaNumChars(inputValue))
        alert(
          "Please enter non-empty strings with alphanumeric characters only."
        );
      else {
        setGlobalId(globalId + 1);
        addTodo(globalId, inputValue);
        setItemList([
          ...TODO_ITEMS,
          { id: globalId.toString(), value: inputValue },
        ]);
      }
    }
  };

  const removeItem = async (idToRemove) => {
    const updatedItemList = TODO_ITEMS.filter((item) => item.id !== idToRemove);
    setItemList(updatedItemList);

    await removeTodo(idToRemove);
  };

  const handleClickEditButton = (editableItemId) => {
    let currEditables = Object.values(editableItems);

    if (!currEditables.includes(editableItemId)) {
      let newEditableList = [...currEditables, editableItemId];
      setEditableItems(newEditableList);
    } else {
      let filteredList = currEditables.filter((item) => item != editableItemId);
      setEditableItems(filteredList);
    }
  };

  const handleConfirm = async (idToUpdate, newValue) => {
    if (!validateAlfaNumChars(newValue))
      alert(
        "Please enter non-empty strings with alphanumeric characters only."
      );
    else {
      if (newValue !== "") {
        await updateTodo(idToUpdate, newValue);
        setItemList((TODO_ITEMS) => {
          return TODO_ITEMS.map((item) => {
            if (item.id === idToUpdate) {
              return { ...item, value: newValue };
            }
            return item;
          });
        });
      }
    }
  };

  const handleCancel = (id) => {
    handleClickEditButton(id);
  };

  return (
    <>
      <div>
        <div>
          <h2>ToDo List</h2>
          <h4>
            Thanks por checking out my ToDo list! This project was created using
            React and Firebase and its purpose is to show all four CRUD
            operations (Create, Read, Update and Delete). <br></br>Enjoy!
          </h4>
        </div>
        <div className="container">
          <ItemList
            items={TODO_ITEMS}
            editables={Object.values(editableItems)}
            removeItem={removeItem}
            handleClickEditButton={handleClickEditButton}
            handleConfirm={handleConfirm}
            handleCancel={handleCancel}
          ></ItemList>
          <NewTodo addItem={addItem}>New Todo</NewTodo>
        </div>
      </div>
    </>
  );
}

export default App;
