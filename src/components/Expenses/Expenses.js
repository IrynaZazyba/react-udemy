import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expences.map((x, i) => (
        <ExpenseItem key={x.id} data={x} />
      ))}
    </Card>
  );
}
export default Expenses;
