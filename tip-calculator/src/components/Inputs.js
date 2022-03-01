import React, {useState} from 'react';
import BillTotalInput from './BillTotalInput'
import PartyInput from './PartyInput'
import InputButton from './InputButton'
import InputCustomButton from './InputCustomButton'

const Inputs = ({setTipPercent, setNumPeople, billTotal, setBillTotal, numPeople, setIsActive}) => {
    const [percentActive, setPercentActive] = useState(undefined);
    const [buttonState, setButtonState] = useState(true)
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
      console.log(e.target.value)
      console.log(e.target)


      let button_array = [...buttonGrid]
      console.log(button_array)
      console.log(button_array[0])
      //let current_button={...button_array[]}
      // for (let i = 0; i < button_array.length; i++) {
      //   if (e.target.value === button_array[i].key) {
      //     useState(button_array[i].key  )
      //     console.log(`it's a match!`)
      //   }
      // }


      setTipPercent(e.target.value / 100)
    }

    //create input button grid
    const tips = [5, 10, 15, 25, 50];

    const buttonGrid = tips.map((tip, index) => {
      return <InputButton key={index} id={index} tipPercent={tip.toString()} setTipPercent={setTipPercent} percentActive={percentActive} setPercentActive={setPercentActive} handlePercentChange={handlePercentChange}/>
    });
    

/*
buttonGrid is an array of objects

splice(start, deleteCount, item) changes the contents 
slice(start, end) non-inclusive of end, creates a copy
*/

  return (
  <div className='inputs'>
      <BillTotalInput handleBillInput={handleBillInput} billTotal={billTotal}/>
      <div className='input-button-section'>
        <p>Select Tip %</p>
        <div className='button-grid'>
          {buttonGrid}
          <InputCustomButton setTipPercent={setTipPercent}/>
        </div>
      </div>
      <PartyInput handlePeople={handlePeople} numPeople={numPeople} isZero={isZero}/>
  </div>
  );
};

export default Inputs;