import Card from "../UI/Card";
import ExpenceDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, {useState} from 'react';


const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.data.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.data.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
