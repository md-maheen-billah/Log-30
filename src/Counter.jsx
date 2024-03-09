import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // add value of counter when clicked
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  // reduce value of counter when clicked
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={{ border: "2px solid yellow" }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
