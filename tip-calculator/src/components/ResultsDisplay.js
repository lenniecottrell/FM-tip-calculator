import React from 'react';

const ResultsDisplay = ({label, amount}) => {
  return (
  <div className='result-section'>
      <div className='result-label'>
        <h2>{label}</h2>
        <p>/ person</p>
      </div>  
      <div className='result-amount'>
          ${amount}
      </div>
  </div>);
};

export default ResultsDisplay;
