import React from 'react';


const BillTotalInput = ({handleBillInput, billTotal}) => {

  return (
    <div className="input-bar">
        <label htmlFor="inputAmount">Bill</label>
        <input className="inputField" name="inputBill" type="text" value={billTotal} placeholder="0" onChange={handleBillInput} />
        {/* <input className="inputField" name="inputAmount" type="number" max="999.00" step="any" value={billTotal} placeholder="0" onChange={handleBillInput} /> */}
    </div>
  );
};

export default BillTotalInput;
