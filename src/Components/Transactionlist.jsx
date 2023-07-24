import React from "react";
import { useContext } from "react";
import { TransactionContext } from "./Globalstate";

const Transactionlist = ({ transaction }) => {
  const { deletetransaction } = useContext(TransactionContext);
  const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => {
          deletetransaction(transaction.id);
        }}
        className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transactionlist;
