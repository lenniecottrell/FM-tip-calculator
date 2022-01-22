import React from 'react';
import InputBar from './InputBar'
import InputButton from './InputButton'
import InputCustomButton from './InputCustomButton'
import DollarIcon from "../images/icon-dollar.svg"
import PersonIcon from '../images/icon-person.svg'

const inputs = () => {
  return (
  <div className='inputs'>
      <InputBar inputLabel="Bill" inputIcon={DollarIcon}/>
      <div className='input-button-section'>
        <p>Select Tip %</p>
        <div className='button-grid'>
            <InputButton tipPercent="5%"/>
            <InputButton tipPercent="10%"/>
            <InputButton tipPercent="15%"/>
            <InputButton tipPercent="25%"/>
            <InputButton tipPercent="50%"/>
            <InputCustomButton />
        </div>
      </div>
      <InputBar inputLabel="Number of People" inputIcon={PersonIcon}/>
  </div>
  );
};

export default inputs;
