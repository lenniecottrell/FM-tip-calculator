import React from 'react';
import ResultsDisplay from './ResultsDisplay';

const Results = ({billTotal, tipPercent, numPeople, isActive, handleReset, isZero}) => {

  const tipPerPerson = (billTotal * tipPercent ) / numPeople

  return <div className='results'>
      <ResultsDisplay 
        label="Tip Amount"
        amount={numPeople === ""
          ? "0.00" 
          : isZero ? "0.00"
          : tipPerPerson}
      />
      <ResultsDisplay 
        label="Total"
        amount={numPeople === "" 
          ? "0.00" 
          : isZero ? "0.00"
          : billTotal / numPeople + tipPerPerson}
      />
      <button className={`resetBtn${isActive ? "-active" : ""}`} onClick={handleReset}>RESET</button>
  </div>;
};

export default Results;
