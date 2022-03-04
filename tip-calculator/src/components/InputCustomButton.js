import React from 'react';

const InputCustomButton = ({setTipPercent, setSelectedTip}) => {
  
  const handleCustomTip = (e) => {
    setTipPercent(e.target.value / 100)
  }
  const handleCustomFocus = () => {
setSelectedTip(0);
  }
  
  return (
      <div className='customBtn'>
        <label htmlFor="custom-button" aria-label='Custom' aria-hidden="false"></label>
        <input type="number" name="custom-button"  placeholder='Custom' onChange={handleCustomTip} onFocus={handleCustomFocus}></input>
      </div>
      );
};

export default InputCustomButton;
