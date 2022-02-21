import React from 'react';



const PartyInput = ({handlePeople, numPeople}) => {

  return (
  <div className="party-input-bar">
      <label htmlFor="inputAmount">Number of People</label>
      <input className="inputField" name="inputParty" type="text"  value={numPeople} placeholder="0" onChange={handlePeople} />
      {/* <input className="inputField" name="inputAmount" type="number"  max="999.00" step="any" value={numPeople === "" ? 0 : numPeople} placeholder="0" onChange={handlePeople} /> */}
  </div>);
};

export default PartyInput;
