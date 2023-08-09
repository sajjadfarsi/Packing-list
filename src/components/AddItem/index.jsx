import "./style.css";
import { useState } from "react";

export default function AddItem({onAddItem}) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const item = { id: Date.now(), quantity, description, packed: false };
    onAddItem(item);
    setDescription("");
    setQuantity(1);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
            <option value={n}>{n}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
