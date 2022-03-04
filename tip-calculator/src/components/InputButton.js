import React from 'react';


const InputButton = ({tipPercent, handlePercentChange, selectedTip}) => {
 
  return <button className={selectedTip === tipPercent ? 'inputBtn-active' : 'inputBtn'} onClick={handlePercentChange} value={tipPercent}>{tipPercent}%</button>;
};


export default InputButton;
