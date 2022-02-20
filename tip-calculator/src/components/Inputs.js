import React from 'react';
import BillTotalInput from './BillTotalInput'
import PartyInput from './PartyInput'
import InputButton from './InputButton'
import InputCustomButton from './InputCustomButton'

const inputs = ({setTipPercent, setNumPeople, billTotal, setBillTotal, numPeople, setIsActive, percentActive, setPercentActive}) => {

    const handleBillInput = (e, numPeople) => {
      if (e.target.value > 0) {
        setIsActive(true);
      } else if (e.target.value === "" && numPeople > 0) {
        setIsActive(true);
      } else if (e.target.value === "") {
        setIsActive(false)
      }
      setBillTotal(e.target.value);
    }

    const handlePeople = (e, billTotal, numPeople) => {
      if (e.target.value === "") {
        //setNumPeople(0)
        setIsActive(false)
      }
      if (e.target.value > 0){
        setIsActive(true);
      } else if (e.target.value === "" && billTotal > 0) {
        //setNumPeople(0)
        setIsActive(true);
      }
      setNumPeople(e.target.value);

    }

  return (
  <div className='inputs'>
      <BillTotalInput handleBillInput={handleBillInput} billTotal={billTotal}/>
      <div className='input-button-section'>
        <p>Select Tip %</p>
        <div className='button-grid'>
            <InputButton tipPercent="5" setTipPercent={setTipPercent} percentActive={percentActive} setPercentActive={setPercentActive}/>
            <InputButton tipPercent="10" setTipPercent={setTipPercent} percentActive={percentActive} setPercentActive={setPercentActive}/>
            <InputButton tipPercent="15" setTipPercent={setTipPercent} percentActive={percentActive} setPercentActive={setPercentActive}/>
            <InputButton tipPercent="25" setTipPercent={setTipPercent} percentActive={percentActive} setPercentActive={setPercentActive}/>
            <InputButton tipPercent="50" setTipPercent={setTipPercent} percentActive={percentActive} setPercentActive={setPercentActive}/>
            <InputCustomButton setTipPercent={setTipPercent}/>
        </div>
      </div>
      <PartyInput handlePeople={handlePeople} numPeople={numPeople}/>
  </div>
  );
};

export default inputs;
