import { useState } from "react";
import "./Counter.scss";
import { useEffect } from "react";
const Counter = ({ setCount }) => {
    const [count, setCounter] = useState(1);

    const increment = () => {
        setCounter(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCounter(count - 1);
        }
    };

    useEffect(() => {
        setCount(count)
    }, [count])
    return (
        <div className="counter G-flex">
            <button onClick={decrement} className="counter-click">-</button>
            <input className="counter-input" type="number" value={count} />
            <button onClick={increment} className="counter-click">+</button>
        </div>
    )
}

export default Counter;