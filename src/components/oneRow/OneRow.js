import React from "react";
import OneNumber from "../oneNumber/OneNumber";

import "./OneRow.css";

const OneRow = ({
  result,
  extraNumber,
  lotteryNumbers,
  matchCounter,
  showWinsOnly,
}) => {
  let extraMatch = false;
  let match = false;
  let existedNumber = undefined;

  if (lotteryNumbers && extraNumber === parseInt(lotteryNumbers.extraNumber)) {
    extraMatch = true;
  }

  return (
    <div
      className={`oneRow_container${
        matchCounter === 3
          ? "_win3"
          : matchCounter > 3
          ? "_win4"
          : showWinsOnly
          ? "_hide"
          : ""
      }`}
    >
      <div className="oneRow_container_extraNumber">
        <OneNumber number={extraNumber} extra={true} match={extraMatch} />
      </div>
      <div className="oneRow_container_result">
        {result.map((num) => {
          existedNumber =
            lotteryNumbers &&
            lotteryNumbers.result.find((e) => parseInt(e) === num);
          if (existedNumber) {
            match = true;
          } else {
            match = false;
          }
          return (
            <OneNumber key={num} number={num} extra={false} match={match} />
          );
        })}
      </div>
    </div>
  );
};

export default OneRow;
