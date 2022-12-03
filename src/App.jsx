import React, { useState } from 'react';
import Expense from './components/Expense_item/Expenses';
import NewExpense from './components/New_Expense/newExpense';
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [arr, setArr] = useState(expenses);
  const expenseHandler = (expense) => {
    console.log("app.js");
    setArr((prevArr) => {
      return ([expense, ...prevArr])
    });
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddNewExpense={expenseHandler} />
      <Expense expenses={arr} />

    </div>
  );
}

export default App;
