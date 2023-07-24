import React from "react";
import { useContext } from "react";
import { TransactionContext } from "./Globalstate";
const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const amount = transactions.map((transaction) => {
    return transaction.amount;
  });
  const total = amount.reduce((accumulator, currentvalue) => {
    return (accumulator += currentvalue);
  }, 0);

  return (
    <div>
      <h4>Your balance</h4>
      <h1>{total}</h1>
    </div>
  );
};

export default Balance;
