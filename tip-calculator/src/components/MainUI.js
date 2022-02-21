import React, {useState, useEffect} from 'react';
import Inputs from './Inputs';
import Results from './Results';

const MainUI = () => {
  const [numPeople, setNumPeople] = useState("")
  const [billTotal, setBillTotal] = useState("")
  const [tipPercent, setTipPercent] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const handleReset = () => {
    console.log("clicked reset")
    setBillTotal("");
    setNumPeople("")
    setIsActive(false);
  }
  
  useEffect(() => {
     if (billTotal > 0 || numPeople > 0) {
    setIsActive(true);
  }
  }, [billTotal, numPeople])
 
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
