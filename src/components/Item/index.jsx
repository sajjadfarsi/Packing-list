import "./style.css";

export default function Item({ handleRemoveItem, handlePackItem, item }) {
  return (
    <div className="item">
      <input type="checkbox" onClick={() => handlePackItem(item.id)} />
      <span className={` ${item.packed && "checked"} `}>
        {item.quantity}
        {"  "}
        {item.description}
      </span>
      <button onClick={() => handleRemoveItem(item.id)}>❌</button>
    </div>
  );
}
