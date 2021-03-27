import React, { useState } from "react";

import "./RealNumberForm.css";

const RealNumberForm = ({ getLotteryNumber }) => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [num3, setNum3] = useState(1);
  const [num4, setNum4] = useState(1);
  const [num5, setNum5] = useState(1);
  const [num6, setNum6] = useState(1);
  const [extraNumber, setExtraNumber] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    getLotteryNumber({
      result: [num1, num2, num3, num4, num5, num6],
      extraNumber: extraNumber,
    });
  };

  return (
    <div className="realNumber_container">
      <h2 className="realNumber_container_title">Enter the numbers</h2>
      <form
        className="realNumber_container_form"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="realNumber_container_form_numbers">
          <div>
            <input
              className="extra"
              type="number"
              value={extraNumber}
              onChange={(e) => setExtraNumber(e.target.value)}
            />
          </div>
          <div>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
          </div>
          <div>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
          </div>
          <div>
            <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} />
          </div>
          <div>
            <input type="number" value={num4} onChange={(e) => setNum4(e.target.value)} />
          </div>
          <div>
            <input type="number" value={num5} onChange={(e) => setNum5(e.target.value)} />
          </div>
          <div>
            <input type="number" value={num6} onChange={(e) => setNum6(e.target.value)} />
          </div>
        </div>
        <button className="form_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RealNumberForm;
