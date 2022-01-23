import React from 'react';

const InputBar = ({inputLabel, inputIcon}) => {
  return (
  <div className="inputBar">
      <label htmlFor="inputAmount">{inputLabel}</label>
      <div className="inputField">
        {/* <img src={inputIcon}/> */}
        <input name="inputAmount" type="number" step="any" placeholder="0"></input>
      </div>
  </div>);
};

export default InputBar;
