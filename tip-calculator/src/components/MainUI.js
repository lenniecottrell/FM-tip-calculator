import React, {useState, useEffect} from 'react';
import Inputs from './Inputs';
import Results from './Results';

const MainUI = () => {
  const [numPeople, setNumPeople] = useState("")
  const [billTotal, setBillTotal] = useState("")
  const [tipPercent, setTipPercent] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isZero, setIsZero] = useState(false);

  const handleReset = () => {
    setBillTotal("");
    setNumPeople("")
    setIsActive(false);
    setIsZero(false)
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
          isZero={isZero}
          setIsZero={setIsZero}
        />
        <Results 
          billTotal={billTotal}
          tipPercent={tipPercent}
          numPeople={numPeople}
          isActive={isActive}
          handleReset={handleReset}
          isZero={isZero}
        />
    </div>
    );
};

export default MainUI;
