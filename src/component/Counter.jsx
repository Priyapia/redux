import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const incrementhandler = () => {
    dispatch({ type: "increment" });
  };
  const increasehandler = () => {
    dispatch({ type: "increaseby", amount: 10 });
  };
  const decrementhandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleHandler = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <>
      <h1>REDUX COUNTER</h1>
      {show && <div className="heading">{counter}</div>}
      <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={increasehandler}> increaseby</button>
        <button onClick={decrementhandler}> decrement</button>
      </div>
      <button onClick={toggleHandler}> TOGGLE COUNTER</button>
    </>
  );
};

export default Counter;
