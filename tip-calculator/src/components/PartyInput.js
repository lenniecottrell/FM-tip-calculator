import React from 'react';
// import PersonIcon from '../images/icon-person.svg'


const PartyInput = ({handlePeople}) => {
  return (
  <div className="party-input-bar">
      <label htmlFor="inputAmount">Number of People</label>
      <div className="inputField">
        {/* <img src={inputIcon} alt=""/> */}
        <input name="inputAmount" type="number" step="1" placeholder="0" onChange={handlePeople}></input>
      </div>
  </div>);
};

export default PartyInput;
