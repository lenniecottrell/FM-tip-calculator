import React from 'react';
// import DollarIcon from "../images/icon-dollar.svg"


const BillTotalInput = ({handleBillInput, billTotal}) => {

  return (
    <div className="input-bar">
        <label htmlFor="inputAmount">Bill</label>
        <input className="inputField" name="inputAmount" type="text" value={billTotal} placeholder="0" onChange={handleBillInput} />
        {/* <input className="inputField" name="inputAmount" type="number" max="999.00" step="any" value={billTotal} placeholder="0" onChange={handleBillInput} /> */}
    </div>
  );
};

export default BillTotalInput;
