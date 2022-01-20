import React from "react";
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 30);
    // counter++ => counter = counter + 1
    //console.log("hi");
  };
  const purchase = () => {
    setCounter(counter - 50);
  };

  return (
    <div>
      <h1>Welcome To The Clicking Game</h1>
      <h2>{counter}</h2>
      <button className="button" onClick={incrementCounter}>
        Click
      </button>
      <button className="button" onClick={purchase}>
        Purchae Building
      </button>
    </div>
  );
};

export default Home;
