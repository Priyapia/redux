import { createStore } from "redux";
const initialstate = { counter: 0, showcase: true };
const counterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1, showcase: state.showcase };
    case "decrement":
      return { counter: state.counter - 1, showcase: state.showcase };
    case "toggle":
      return { showcase: !state.showcase, counter: state.counter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;
