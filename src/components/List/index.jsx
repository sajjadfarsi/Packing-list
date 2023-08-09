import "./style.css";
import Item from "../Item";
import { useState } from "react";

export default function List({ items, setItem }) {
  const [sortby, setSortby] = useState("input");
  const sortedItems = items.slice().sort((a, b) => {
    if (sortby === "input") return 0;
    if (sortby === "packedStatus") return (+a.packed - +b.packed);
    if (sortby === "description")
      return a.description.localeCompare(b.description);
  });
  const onRemoveItem = (id) => {
    setItem((items) => {
      return items.filter((item) => item.id !== id);
    });
  };
  const onPackItem = (id) => {
    setItem((items) =>
      items.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearList = () => {
    if (window.confirm("are you sure to clear list?")) setItem([]);
  };
  return (
    <div className="container">
      <div className="list">
        {sortedItems.map((item) => (
          <Item
            handlePackItem={onPackItem}
            handleRemoveItem={onRemoveItem}
            item={item}
            key={item.id}
          />
        ))}
      </div>
      <div className="options">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packedStatus">sort by packed status</option>
        </select>
        <button onClick={handleClearList}>CLEAR LIST</button>
      </div>
    </div>
  );
}
