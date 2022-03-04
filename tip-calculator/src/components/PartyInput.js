import React from 'react';



const PartyInput = ({handlePeople, numPeople, isZero}) => {
console.log(isZero);
  return (
    <div className="party-input-bar">
        <label htmlFor="inputAmount">Number of People</label>
        {isZero ? <p id="warning-on">Can't be zero</p> : <p id="warning"></p>}
        <input className={isZero ? "inputField-zero" : "inputField"} name="inputParty" type="text"  value={numPeople} placeholder="0" onChange={handlePeople} />
        {/* <input className="inputField" name="inputAmount" type="number"  max="999.00" step="any" value={numPeople === "" ? 0 : numPeople} placeholder="0" onChange={handlePeople} /> */}
    </div>
  );
};

export default PartyInput;
