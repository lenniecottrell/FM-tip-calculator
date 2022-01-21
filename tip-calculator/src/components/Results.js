import React from 'react';
import { useState } from 'react';
import ResultsDisplay from './ResultsDisplay';

const Results = ({tipData, totalData}) => {
  
  const [tipPerPerson, setTipPerPerson] = useState(`${0}`)
  const [totalPerPerson, setTotalPerPerson] = useState(`${0}`)
  return <div className='results'>
      <ResultsDisplay 
        label="Tip Amount"
        amount={tipPerPerson}
      />
      <ResultsDisplay 
        label="Total"
        amount={totalPerPerson}
      />
      <button className='resetBtn'>RESET</button>
  </div>;
};

export default Results;
