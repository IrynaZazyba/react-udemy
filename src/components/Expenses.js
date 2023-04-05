import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expences">
      {props.expences.map((x, i) => (
        <ExpenseItem data={x} />
      ))}
    </div>
  );
}
export default Expenses;
