import ExpenceForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

 const saveExpenceHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  }
  props.onAddExpense(expenseData);
 }

  return <div className="new-expense">
    <ExpenceForm onSaveEexpenceData={saveExpenceHandler}/>
  </div>;
};

export default NewExpense;
