import React from "react";
import { useState } from "react";

const Home = () => {
  const [gold, setGold] = useState(0);
  const [goldInc, setGoldInc] = useState(30);
  const [purchaseInc, setPurchaseInc] = useState(50);
  const incrementGold = () => {
    setGold(gold + goldInc);
    // gold++ => gold = gold + 1
    //console.log("hi");
  };
  const purchase = () => {
    setGold(gold - purchaseInc);
    setGoldInc(goldInc + 30);
    setPurchaseInc(purchaseInc * 2);
  };

  return (
    <div>
      <h1>Welcome To The Clicking Game</h1>
      <h2>{gold}</h2>
      <button className="button" onClick={incrementGold}>
        Click
      </button>
      <button className="button" onClick={purchase}>
        Purchae Building
      </button>
    </div>
  );
};

export default Home;
