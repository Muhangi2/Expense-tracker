import React from "react";
import { useContext } from "react";
import { TransactionContext } from "./Globalstate";
const Income = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions.map((transaction) => {
    return transaction.amount;
  });

  const filterincome = income.filter((amount) => amount > 0);
  const filterexpense = income.filter((amount) => amount < 0);
  ///lets add them
  const totalincome = filterincome.reduce(
    (accumulator, currentvalue) => (accumulator += currentvalue),
    0
  ).toFixed(2);
  const totalexpense = filterexpense
    .reduce((accumulator, currentvalue) => (accumulator += currentvalue), 0)
    .toFixed(2);

  return (
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {totalincome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {totalexpense}
        </p>
      </div>
    </div>
  );
};

export default Income;
