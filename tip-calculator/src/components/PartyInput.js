import React, {useState, useEffect} from 'react';



const PartyInput = ({handlePeople, numPeople, isZero}) => {


  return (
  <div className="party-input-bar">
      <label htmlFor="inputAmount">Number of People</label>
      {isZero ? <p id="warning"></p> : <p id="warning-on">Can't be zero</p>}
      <input className={isZero ? "inputField" : "inputField-zero"} name="inputParty" type="text"  value={numPeople} placeholder="0" onChange={handlePeople} />
      {/* <input className="inputField" name="inputAmount" type="number"  max="999.00" step="any" value={numPeople === "" ? 0 : numPeople} placeholder="0" onChange={handlePeople} /> */}
  </div>);
};

export default PartyInput;
