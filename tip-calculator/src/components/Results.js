import React from 'react';
import ResultsDisplay from './ResultsDisplay';

const Results = ({billTotal, tipPercent, numPeople}) => {

  const tipPerPerson = (billTotal * tipPercent) / numPeople

  return <div className='results'>
      <ResultsDisplay 
        label="Tip Amount"
        amount={tipPerPerson}
      />
      <ResultsDisplay 
        label="Total"
        amount={billTotal / numPeople + tipPerPerson}
      />
      <button className='resetBtn'>RESET</button>
  </div>;
};

export default Results;
