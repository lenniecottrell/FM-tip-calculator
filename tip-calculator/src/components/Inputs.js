import React, {useState} from 'react';
import BillTotalInput from './BillTotalInput'
import PartyInput from './PartyInput'
import InputButton from './InputButton'
import InputCustomButton from './InputCustomButton'

const Inputs = ({setTipPercent, setNumPeople, billTotal, setBillTotal, numPeople, setIsActive}) => {
    const [selectedTip, setSelectedTip] = useState(15);
    const [isZero, setIsZero] = useState(true);

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

    const handlePeople = (e, billTotal) => {
      if (e.target.value === "") {
        setIsActive(false)
      }

      if (e.target.value > 0){
        setIsActive(true);
      } else if (e.target.value === "" && billTotal > 0) {
        setIsActive(true);
      }

      setNumPeople(e.target.value);

      if (numPeople === 0 || isNaN(numPeople)=== true) {
        setIsZero(true);
        } else setIsZero(false);
    }

    const handlePercentChange = (e) => {
      setSelectedTip(e.target.value)         
      setTipPercent(e.target.value / 100)
    }

    //create input button grid
    const tips = [5, 10, 15, 25, 50];

    const buttonGrid = tips.map((tip) => {
      return <InputButton 
        key={tip} 
        className={selectedTip === tip ? 'inputBtn-active' : 'inputBtn'}
        tipPercent={tip.toString()}
        selectedTip={selectedTip} 
        setTipPercent={setTipPercent} 
        handlePercentChange={handlePercentChange}/>
    });


  return (
  <div className='inputs'>
      <BillTotalInput handleBillInput={handleBillInput} billTotal={billTotal}/>
      <div className='input-button-section'>
        <p>Select Tip %</p>
        <div className='button-grid'>
          {buttonGrid}
          <InputCustomButton setTipPercent={setTipPercent} setSelectedTip={setSelectedTip}/>
        </div>
      </div>
      <PartyInput handlePeople={handlePeople} numPeople={numPeople} isZero={isZero}/>
  </div>
  );
};

export default Inputs;