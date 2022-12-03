import Expense from './ExpenseItem';
import ExpensesChart from './Expensechart';
import './Expenses.css'
import Filter from './expenseFilter'
import Card from './Card';
import { useState } from 'react';
function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2022')
    const yearHandler = (year) => {
        setSelectedYear(year);
        console.log(selectedYear);
    }
    const arr = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear
    })
    return (
        <div>

            <Card className='expenses'>
                <Filter onSelectingYear={yearHandler} />
                <ExpensesChart expenses={arr} />
                {arr.length === 0 && <h2 className="expenses-list__fallback">Found no expenses.</h2>}
                {arr.length != 0 && arr.map((expense) => {
                    return <Expense
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                })}

            </Card>
        </div>
    )
}
export default Expenses;