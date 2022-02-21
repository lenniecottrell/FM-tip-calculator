import React, {useState} from 'react';


const InputButton = ({tipPercent, setTipPercent, percentActive, setPercentActive}) => {
  //const [clicked, setClicked] = useState(false);

  const handlePercent = (e) => {
    setTipPercent(e.target.value / 100)
    setPercentActive(!percentActive)
  }
 
  return <button className={`inputBtn${percentActive ? "-active": ''}`} value={tipPercent} onClick={handlePercent}>{tipPercent}%</button>;
};

export default InputButton;
 