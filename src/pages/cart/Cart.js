import React, { useEffect, useState } from "react";

import OneRow from "../../components/oneRow/OneRow";
import RealNumbersForm from "../../components/realNumberForm/RealNumberForm";

import "./Cart.css";

const Cart = (props) => {
  const [finalResult, setFinalResult] = useState(undefined);
  const [lotteryNumber, setLotteryNumber] = useState(undefined);
  const [showEnterNumbers, setShowEnterNumbers] = useState(false);

  const savedResult = props.location.state;

  useEffect(() => {
    if (savedResult) {
      localStorage.setItem("result", JSON.stringify(savedResult));
    }
  }, [savedResult]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("result"));
    setFinalResult(data);
  }, []);

  const deleteHandler = () => {
    setFinalResult(undefined);
    setShowEnterNumbers(false);
    setLotteryNumber(undefined);
    setTimeout(() => {
      localStorage.clear();
    }, [50]);
  };

  const getLotteryNumber = (numbers) => {
    setLotteryNumber(numbers);
  };

  const checkHandler = () => {
    setShowEnterNumbers((prev) => !prev);
  };

  console.log("lotterynumber", lotteryNumber);

  return (
    <div className="cart_container">
      <h1 className="cart_container_title">Good luck!</h1>
      {finalResult &&
        finalResult.map((r, index) => (
          <OneRow
            key={index}
            result={r.result}
            extraNumber={r.extraNumber}
            lotteryNumbers={lotteryNumber}
          />
        ))}
      {finalResult && (
        <div className="cart_container_buttons">
          <button onClick={checkHandler}>Check</button>
          <button
            className="cart_container_buttons_delete"
            onClick={deleteHandler}
          >
            Delete all
          </button>
        </div>
      )}
      {showEnterNumbers && (
        <RealNumbersForm getLotteryNumber={getLotteryNumber} />
      )}
    </div>
  );
};

export default Cart;
