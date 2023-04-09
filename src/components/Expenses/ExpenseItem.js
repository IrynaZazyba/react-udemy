import Card from "../UI/Card";
import ExpenceDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, {useState} from 'react';


const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
      <ExpenceDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">${props.data.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
