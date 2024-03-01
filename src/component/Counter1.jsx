import { useSelector, useDispatch } from "react-redux";
const Counter1 = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showcase);
  const dispatch = useDispatch();
  const incehandle = () => {
    dispatch({ type: "increment" });
  };
  const decrehandle = () => {
    dispatch({ type: "decrement" });
  };
  const togglehandle = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <>
      <div>
        <h2>redux practice</h2>
        {show && <div> {counter}</div>}
      </div>
      <button onClick={incehandle}>increment</button>
      <button onClick={decrehandle}>decrement</button>
      <button onClick={togglehandle}>toggle</button>
    </>
  );
};

export default Counter1;
