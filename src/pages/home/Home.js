import React, { useState } from "react";
import { Redirect } from "react-router";

import OneRow from "../../components/oneRow/OneRow";
import getRandomRow from "../../helper/getRandomRow";

import "./Home.css";

const Home = () => {
  const [numberOfRows, setNumberOfRows] = useState('');
  const [result, setResult] = useState([]);
  const [saveClicked, setSaveClicked] = useState(false);

  const sendHandler = (numberOfRows) => {
    const result = getRandomRow(numberOfRows);
    setResult(result);
  };

  const saveHandler = () => {
    setSaveClicked(true);
  };

  return (
    <>
      {!saveClicked ? (
        <div className="home_container">
          <h1 className="home_container_title">I will be a millionaire!</h1>
          <div className="home_container_rows_number">
            <label>How many rows?</label>
            <input
              type="number"
              value={numberOfRows}
              onChange={(e) => setNumberOfRows(e.target.value)}
            />
            <div className="home_container_buttons">
              <button onClick={() => sendHandler(numberOfRows)}>
                Generate
              </button>
              {result.length !== 0 && (
                <button
                  className="home_container_buttons_save"
                  onClick={() => saveHandler()}
                >
                  Save
                </button>
              )}
            </div>
            {result &&
              result.map((r, index) => (
                <OneRow
                  key={index}
                  result={r.result}
                  extraNumber={r.extraNumber}
                  showWinsOnly="all"
                />
              ))}
          </div>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/Cart",
            state: result,
          }}
        />
      )}
    </>
  );
};

export default Home;
