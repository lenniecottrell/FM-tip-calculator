import React from 'react';

const InputButton = ({tipPercent, setTipPercent}) => {
  
  const handlePercent = (e) => {
    setTipPercent(e.target.value / 100)
  }

  return <button className='inputBtn' value={tipPercent} onClick={handlePercent}>{tipPercent}%</button>;
};

export default InputButton;
