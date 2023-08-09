//components
import Header from "../Header";
import AddItem from "../AddItem";
import List from "../List";
import { useState } from "react";
//style
import "./App.css";
function App() {
  const [items, setItem] = useState([]);
  const handleAddItem = (item) => {
    setItem((items) => [...items, item]);
  };
  return (
    <div className="App">
      <Header  />
      <AddItem onAddItem={handleAddItem} />
      <List items={items} setItem={setItem}/>
    </div>
  );
}

export default App;
