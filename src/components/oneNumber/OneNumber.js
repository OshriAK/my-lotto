import React from 'react';

import './OneNumber.css';

const OneNumber = ({ number, extra, match }) => {
  
  return !extra ? (
    <div className="oneNumber_container">{number}</div>
  ) : (
    <div className="oneNumber_container_extra">{number}</div>
  );
};

export default OneNumber;
