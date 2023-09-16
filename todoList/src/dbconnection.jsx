
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBAoWzZ1QGIh-RVehSzasbXE7TNZzLcT3I",
  authDomain: "todolistbd-9e6c2.firebaseapp.com",
  databaseURL: "https://todolistbd-9e6c2-default-rtdb.firebaseio.com",
  projectId: "todolistbd-9e6c2",
  storageBucket: "todolistbd-9e6c2.appspot.com",
  messagingSenderId: "734650237253",
  appId: "1:734650237253:web:6cdaa668ddf177270e7e2c",
  measurementId: "G-FLHMDEQMCW"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const getRefDB = () => {
  const todosRef = ref(database, "todos"); // Reference to the "todos" location
  return todosRef;
};


export const getTodos = async () => {
  try {
    const todosRef = getRefDB();
    const snapshot = await get(todosRef);
    if (snapshot.exists()) {
      const data = await snapshot.val();
      return data;
    } else {
      console.log("No todos found.");
    }
  } catch (error) {
    console.error("Error reading data:", error);
  }
};