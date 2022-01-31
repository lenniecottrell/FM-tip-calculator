import React, {useState} from 'react';
import Inputs from './Inputs';
import Results from './Results';

const MainUI = () => {
  const [numPeople, setNumPeople] = useState(0)
  const [billTotal, setBillTotal] = useState("")
  const [tipPercent, setTipPercent] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const handleReset = () => {
    setBillTotal(0);
    setNumPeople(0)
    setIsActive(false);
  }
  
  return (
    <div className='main-ui'>
        <Inputs 
          setTipPercent={setTipPercent}
          setBillTotal={setBillTotal}
          setNumPeople={setNumPeople}
          numPeople={numPeople}
          billTotal={billTotal}
          setIsActive={setIsActive}
        />
        <Results 
          billTotal={billTotal}
          tipPercent={tipPercent}
          numPeople={numPeople}
          isActive={isActive}
          handleReset={handleReset}
        />
    </div>
    );
};

export default MainUI;
