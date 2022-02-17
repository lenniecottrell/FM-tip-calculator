import React from 'react';
import BillTotalInput from './BillTotalInput'
import PartyInput from './PartyInput'
import InputButton from './InputButton'
import InputCustomButton from './InputCustomButton'

const inputs = ({setTipPercent, setNumPeople, billTotal, setBillTotal, numPeople, setIsActive}) => {

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
      console.log("from handlePeople start: ", numPeople);
      console.log("e.target.value: ", e.target.value);
      if (e.target.value === "" || isNaN(numPeople) === true || e.target.value===undefined || e.target.value === null) {
        setNumPeople(0)
        setIsActive(false)
      }
      if (e.target.value > 0){
        setIsActive(true);
      } else if ((e.target.value === "" || isNaN(e.target.value) === true) && billTotal > 0) {
        setNumPeople(0)
        setIsActive(true);
      }
      setNumPeople(e.target.value);
      console.log("from handlePeople end: ", numPeople);

    }

  return (
  <div className='inputs'>
      <BillTotalInput handleBillInput={handleBillInput} billTotal={billTotal}/>
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
      <PartyInput handlePeople={handlePeople} numPeople={numPeople}/>
  </div>
  );
};

export default inputs;
