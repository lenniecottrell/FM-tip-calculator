import React, {useState, useEffect} from 'react';
import Inputs from './Inputs';
import Results from './Results';

const MainUI = () => {
  const [numPeople, setNumPeople] = useState(undefined)
  const [billTotal, setBillTotal] = useState(undefined)
  const [tipPercent, setTipPercent] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const handleReset = () => {
    console.log("clicked reset")
    setBillTotal(undefined);
    setNumPeople(undefined)
    setIsActive(false);
  }
  
  useEffect(() => {
     if (billTotal > 0 || numPeople > 0) {
    setIsActive(true);
  }
  }, [billTotal, numPeople])
 
  console.log("from mainUI: ", numPeople)
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
