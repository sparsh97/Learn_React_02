import React, { useReducer, useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_VALUE_TO = "addValue";
const SUBMIT_EVENGT = "submit-event";
const reducer = (state, action) => {
  if (action.type === DECREMENT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === DECREMENT) {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === ADD_VALUE_TO) {
    return {
      ...state,
      valueToAdd: action.value,
    };
  }

  if (action.type === SUBMIT_EVENGT) {
    return {
      ...state,
      count: state.count + state.valueToAdd,
      valueToAdd: 0
    };
  }

  return state;
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({ type: ADD_VALUE_TO, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: SUBMIT_EVENGT
    })
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state?.count}</h1>
      <div className="flex flex-row">
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={state?.valueToAdd || ""}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
