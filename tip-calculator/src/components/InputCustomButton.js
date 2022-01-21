import React from 'react';

const InputCustomButton = () => {
  return (
      <div className='customBtn'>
        <label for="custom-button" aria-label='Custom' aria-hidden="false"></label>
        <input type="number" name="custom-button"  placeholder='Custom'></input>
      </div>
      );
};

export default InputCustomButton;
