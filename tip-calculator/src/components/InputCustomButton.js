import React from 'react';

const InputCustomButton = ({setTipPercent}) => {
  
  const handleCustomTip = (e) => {
    setTipPercent(e.target.value / 100)
  }
  
  return (
      <div className='customBtn'>
        <label htmlFor="custom-button" aria-label='Custom' aria-hidden="false"></label>
        <input type="number" name="custom-button"  placeholder='Custom' onChange={handleCustomTip}></input>
      </div>
      );
};

export default InputCustomButton;
