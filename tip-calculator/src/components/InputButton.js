import React, {useState} from 'react';


const InputButton = ({tipPercent, setTipPercent, percentActive, setPercentActive}) => {
  const [innerActive, setInnerActive] = useState(false);

  const handlePercent = (e) => {
    setTipPercent(e.target.value / 100)
    setInnerActive(!innerActive)
  }
 
  return <button className={`inputBtn${innerActive ? "-active": ''}`} value={tipPercent} onClick={handlePercent}>{tipPercent}%</button>;
};

export default InputButton;
 