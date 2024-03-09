import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button 2 clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("button 3 clicked");
        }}
      >
        Click 3
      </button>
      <button
        onClick={() => {
          addToFive(5);
        }}
      >
        Click 4
      </button>
    </>
  );
}

export default App;
