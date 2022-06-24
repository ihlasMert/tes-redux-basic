import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const ıncrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const ıncreaseHanler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}> {counter}</div>} 
      <div className="counter button">
        <button onClick={ıncrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={ıncreaseHanler}>Decimal Number</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
