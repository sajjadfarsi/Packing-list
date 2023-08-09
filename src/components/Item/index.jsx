import "./style.css";

export default function Item({ handleRemoveItem, handlePackItem, item }) {
  return (
    <div>
      <input type="checkbox" onClick={() => handlePackItem(item.id)} />
      <span>{item.quantity}</span>
      {"  "}
      <span>{item.description}</span>
      <button onClick={() =>handleRemoveItem(item.id)}>❌</button>
    </div>
  );
}
