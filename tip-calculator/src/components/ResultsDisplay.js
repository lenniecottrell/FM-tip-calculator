import React from 'react';

const ResultsDisplay = ({label, amount}) => {
  return (
  <div className='result-section'>
      <div className='result-label'>
        <h2>{label}</h2>
        <p>/ person</p>
      </div>  
      <div className='result-amount'>
          ${(Math.round(amount * 100) / 100).toFixed(2)}
      </div>
  </div>);
};

export default ResultsDisplay;
