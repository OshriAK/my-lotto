import React, { useState } from "react";

import "./RealNumberForm.css";

const RealNumberForm = ({ getLotteryNumber, setShowWinsOnly }) => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");
  const [num6, setNum6] = useState("");
  const [extraNumber, setExtraNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    getLotteryNumber({
      result: [num1, num2, num3, num4, num5, num6],
      extraNumber: extraNumber,
    });
  };

  const showWinsOnlyhandler = (event) => {
    setShowWinsOnly(event.target.value);
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
              placeholder="E"
              onChange={(e) => setExtraNumber(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              value={num1}
              placeholder="1"
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              value={num2}
              placeholder="2"
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              value={num3}
              placeholder="3"
              onChange={(e) => setNum3(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              value={num4}
              placeholder="4"
              onChange={(e) => setNum4(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              value={num5}
              placeholder="5"
              onChange={(e) => setNum5(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              value={num6}
              placeholder="6"
              onChange={(e) => setNum6(e.target.value)}
            />
          </div>
        </div>
        <div className="form_buttons_container">
          <button className="form_submit" type="submit">
            Submit
          </button>
          <div className="radio_buttons_container">
            <div className="radio_buttons_container_mini_container">
              <label>ALL</label>
              <input
                type="radio"
                name="wins"
                value="all"
                onChange={showWinsOnlyhandler}
              />
            </div>
            <div className="radio_buttons_container_mini_container">
              <label>+3</label>
              <input
                type="radio"
                name="wins"
                value="+3"
                onChange={showWinsOnlyhandler}
              />
            </div>
            <div className="radio_buttons_container_mini_container">
              <label>+4</label>
              <input
                type="radio"
                name="wins"
                value="+4"
                onChange={showWinsOnlyhandler}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RealNumberForm;
