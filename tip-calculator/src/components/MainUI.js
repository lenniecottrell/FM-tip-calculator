import React, {useState} from 'react';
import Inputs from './Inputs';
import Results from './Results';

const MainUI = () => {
  const [numPeople, setNumPeople] = useState(1)
  const [billTotal, setBillTotal] = useState("")
  const [tipPercent, setTipPercent] = useState(0)

  //These were moved to the Inputs.js

  // const handleBillInput = (e) => {
  //   setBillTotal(e.target.value)
  // }

  // const handlePeople = (e) => {
  //   setNumPeople(e.target.value)
  // }
  
  return (
    <div className='main-ui'>
        <Inputs 
          setTipPercent={setTipPercent}
          setBillTotal={setBillTotal}
          setNumPeople={setNumPeople}
          numPeople={numPeople}
        />
        <Results 
          billTotal={billTotal}
          tipPercent={tipPercent}
          numPeople={numPeople}
        />
    </div>
    );
};

export default MainUI;
