import React from 'react';
import BillTotalInput from './BillTotalInput'
import PartyInput from './PartyInput'
import InputButton from './InputButton'
import InputCustomButton from './InputCustomButton'

const inputs = ({setTipPercent, setNumPeople, setBillTotal, numPeople}) => {

    const handleBillInput = (e) => {
    setBillTotal(e.target.value)
  }

    const handlePeople = (e) => {
        setNumPeople(e.target.value)
  }

  return (
  <div className='inputs'>
      <BillTotalInput handleBillInput={handleBillInput}/>
      <div className='input-button-section'>
        <p>Select Tip %</p>
        <div className='button-grid'>
            <InputButton tipPercent="5" setTipPercent={setTipPercent}/>
            <InputButton tipPercent="10" setTipPercent={setTipPercent}/>
            <InputButton tipPercent="15" setTipPercent={setTipPercent}/>
            <InputButton tipPercent="25" setTipPercent={setTipPercent}/>
            <InputButton tipPercent="50" setTipPercent={setTipPercent}/>
            <InputCustomButton setTipPercent={setTipPercent}/>
        </div>
      </div>
      <PartyInput handlePeople={handlePeople}/>
  </div>
  );
};

export default inputs;
