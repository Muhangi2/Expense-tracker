import React from "react";
import { TransactionContext } from "./Globalstate.js";
import { useContext } from "react";
import Transactionlist from "./Transactionlist";
const History = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          return (
           <Transactionlist transaction={transaction} key={transaction.id}/>
          );
        })}
      </ul>
    </>
  );
};

export default History;
