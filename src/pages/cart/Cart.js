import React, { useEffect, useState } from "react";

import OneRow from "../../components/oneRow/OneRow";

import "./Cart.css";

const Cart = (props) => {
  const [finalResult, setFinalResult] = useState(undefined);
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
    setTimeout(() => {
      localStorage.clear();
    }, [50]);
  };

  return (
    <div className="cart_container">
      <h1 className="cart_container_title">Good luck!</h1>
      {finalResult &&
        finalResult.map((r, index) => (
          <OneRow key={index} result={r.result} extraNumber={r.extraNumber} />
        ))}
      {finalResult && (
        <div className="cart_container_buttons">
          <button>Check</button>
          <button
            className="cart_container_buttons_delete"
            onClick={deleteHandler}
          >
            Delete all
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
