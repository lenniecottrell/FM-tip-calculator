import React from 'react';
// import PersonIcon from '../images/icon-person.svg'


const PartyInput = ({handlePeople, numPeople}) => {
  // const showNumPeople = (numPeople) => {
  //   if (numPeople === "" || isNaN(numPeople) === true) {
  //     return "";
  //   } else {
  //     return numPeople;
  //   }
  // }
console.log("from PartyInput: ", numPeople)

  return (
  <div className="party-input-bar">
      <label htmlFor="inputAmount">Number of People</label>
      {/* <img src={inputIcon} alt=""/> */}
      <input className="inputField" name="inputAmount" type="number"  max="999.00" step="any" value={numPeople === "" ? 0 : numPeople} placeholder="0" onChange={handlePeople} />
  </div>);
};

export default PartyInput;
