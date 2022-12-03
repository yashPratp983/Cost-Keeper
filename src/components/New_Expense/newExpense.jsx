import './newExpense.css'
import ExpenseForm from './ExpenseForm'
const addNewExpense = (props) => {
    const addExpenseHandler = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }
        console.log(newExpense);
        props.onAddNewExpense(newExpense);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onAddExpense={addExpenseHandler} />
        </div>
    )
}
export default addNewExpense;