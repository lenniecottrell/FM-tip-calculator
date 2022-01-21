import React from 'react';

const InputBar = ({inputLabel, inputIcon}) => {
  return (
  <div>
      <label for="inputAmount">{inputLabel}</label>
      <div className="inputField">
        <i className={inputIcon}></i>
        <input name="inputAmount" type="number"></input>
      </div>
  </div>);
};

export default InputBar;
