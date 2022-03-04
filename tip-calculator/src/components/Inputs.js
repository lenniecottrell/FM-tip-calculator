import React, {useState, useEffect} from 'react';
import BillTotalInput from './BillTotalInput'
import PartyInput from './PartyInput'
import InputButton from './InputButton'
import InputCustomButton from './InputCustomButton'

const Inputs = ({setTipPercent, setNumPeople, billTotal, setBillTotal, numPeople, setIsActive, isZero, setIsZero}) => {
    const [selectedTip, setSelectedTip] = useState(15);

    const handleBillInput = (e, numPeople) => {
      if (e.target.value > 0) {
        setIsActive(true);
        if (numPeople === "" || numPeople === 0) {
          setIsZero(true);
        }
      } else if (e.target.value === "" && numPeople > 0) {
        setIsActive(true);
      } else if (e.target.value === "") {
        setIsActive(false)
      }

      setBillTotal(e.target.value);
    }

    const handlePeople = (e, billTotal) => {
          
      console.log(e.target.value);
      if (e.target.value === "") {
        setIsActive(false)
      }

      if (e.target.value > 0){
        setIsActive(true);
      } else if (e.target.value === "" && billTotal > 0) {
        setIsActive(true);
      }
      setNumPeople(e.target.value);
    }

      useEffect(() => {
        if (numPeople == 0 || isNaN(numPeople)) {
          setIsZero(true);
          } else setIsZero(false);
      }, [numPeople, setIsZero])



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