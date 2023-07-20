import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Counter name="A" />
      <Counter name="B" />
      <Counter name="C" />
    </>
  );
}

function Counter({ name }) {
  //start value of currentCount is 0 in this example
  //currentCount can change over time if setCount is used!
  const [currentCount, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        //  ~== button.addEventlistener('click')

        setCount(currentCount + 1); // trigger rerender when calling the setter function
        console.log(`Button ${name} value:`, currentCount);
      }}
    >
      You have clicked this button {currentCount} times
    </button>
  );
}
