import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";


const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2021');

  const onYearChangeHandler = (year) => {
    setSelectedYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onYearChange={onYearChangeHandler}/>
      {props.expences.map((x, i) => (
        <ExpenseItem key={x.id} data={x} />
      ))}
    </Card>
  );
}
export default Expenses;
