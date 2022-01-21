import React from 'react';

const ResultsDisplay = ({label, amount}) => {
  return (
  <div className='result-section'>
      <div className='results-labels'>
        <h2>{label}</h2>
        <p>/ person</p>
      </div>  
      <div className='resuts-amounts'>
          {amount}
      </div>
  </div>);
};

export default ResultsDisplay;
