import React, { useState } from "react";
import { useContext } from "react";
import { TransactionContext } from "./Globalstate";
const Transaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // context
  const { addtransaction } = useContext(TransactionContext);

  function handleform(e) {
    e.preventDefault();
    const submitteddetails = {
      id: Math.floor(Math.random * 100000),
      text,
      amount: +amount,
    };
    addtransaction(submitteddetails);
  }

  const handlechange = (e) => {
    const inputtext = e.target.value;
    setText(inputtext);
  };
  const handleamount = (e) => {
    const inputamount = e.target.value;
    setAmount(inputamount);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleform}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={handlechange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleamount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      <h3>{amount}</h3>
    </>
  );
};

export default Transaction;
