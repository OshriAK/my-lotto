import React from 'react';
import OneNumber from '../oneNumber/OneNumber';

import './OneRow.css';

const OneRow = ({ result, extraNumber, lotteryNumbers }) => {
  
  console.log('lotteryNumbers-onerow', lotteryNumbers);
  return (
    <div className="oneRow_container">
      <div className="oneRow_container_extraNumber">
        <OneNumber number={extraNumber} extra={true} />
      </div>
      <div className="oneRow_container_result">
        {result.map((num) => (
          <OneNumber key={num} number={num} extra={false} />
        ))}
      </div>
    </div>
  );
};

export default OneRow;
