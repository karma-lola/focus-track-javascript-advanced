import { useState } from "react";
import "./Counter.css";

const Counter = ({ initialValue = 0 }) => {
  const [value, setValue] = useState(initialValue);
  const incremeant = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  const redColour = value > 10 ? "counter-red" : "";
  return (
    <div className="counter_yellow">
      <button onClick={incremeant}>Count UP</button>
      <p className={redColour}> {value}</p>
      <button disabled={value <= 0} onClick={decrement}>
        Count Down
      </button>
    </div>
  );
};

export default Counter;
