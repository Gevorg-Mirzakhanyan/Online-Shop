import { useState } from "react";
import "./Counter.scss";
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
      };
    return(
        <div className="counter">
            <button onClick={decrement} className="counter-click">-</button>
            <input className="counter-input" type="number" value={count} />
            <button onClick={increment} className="counter-click">+</button>
        </div>
    )
}

export default Counter;