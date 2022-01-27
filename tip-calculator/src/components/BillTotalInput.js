import React from 'react';
// import DollarIcon from "../images/icon-dollar.svg"


const BillTotalInput = ({handleBillInput, setBillTotal}) => {


  return (
    <div className="input-bar">
        <label htmlFor="inputAmount">Bill</label>
        <div className="inputField">
          <input name="inputAmount" type="number" max="99999.00" step="any" placeholder="0" onChange={handleBillInput}></input>
        </div>
    </div>
  );
};

export default BillTotalInput;
