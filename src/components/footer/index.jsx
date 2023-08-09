import "./style.css";
export default function Footer({ items }) {
  const done = items.filter((item) => {
    return item.packed;
  }).length;
  const numItems = items.length;
  const percent = Math.round((100 * done) / numItems);
  return (
    <footer>
      {numItems === 0 ? (
        <p>Start adding some items to your packing list 🚀</p>
      ) : percent !== 100 ? (
        <p>
          💼 You have {numItems} items on your list, and you already packed{" "}
          {done} ({percent}%)
        </p>
      ) : (
        <p>You got everything! Ready to go ✈️</p>
      )}
    </footer>
  );
}
