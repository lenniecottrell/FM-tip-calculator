import React from 'react';


const InputButton = ({tipPercent, setTipPercent, percentActive, setPercentActive, handlePercentChange, index}) => {

  console.log("percent active: ", percentActive)
 
  return <button id={index} className={`inputBtn`} value={tipPercent} onClick={handlePercentChange}>{tipPercent}%</button>;
};

export default InputButton;
 