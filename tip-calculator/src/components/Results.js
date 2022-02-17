import React from 'react';
import ResultsDisplay from './ResultsDisplay';

const Results = ({billTotal, tipPercent, numPeople, isActive, handleReset}) => {

  const tipPerPerson = (billTotal * tipPercent ) / numPeople
console.log("from results: ", numPeople)
console.log(isNaN(numPeople))

  return <div className='results'>
      <ResultsDisplay 
        label="Tip Amount"
        amount={numPeople === 0 || isNaN(numPeople)===true ? "0.00" : billTotal / numPeople + tipPerPerson}
      />
      <ResultsDisplay 
        label="Total"
        amount={numPeople === 0 || isNaN(numPeople)===true ? "0.00" : billTotal / numPeople + tipPerPerson}
      />
      <button className={`resetBtn${isActive ? "-active" : ""}`} onClick={handleReset}>RESET</button>
  </div>;
};

export default Results;
