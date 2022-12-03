import './ExpenseForm.css'
import React, { useState } from 'react';
const expenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [showForm, setShowForm] = useState(false);
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });
    const titleHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value,

        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, title: event.target.value }
        // })
        // console.log(title)

    }
    const amountHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, amount: event.target.value }
        // })
        //console.log(amount)
    }
    const dateHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, date: event.target.value }
        // })
        //console.log(date)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            date: new Date(date),
            amount: amount
        }
        props.onAddExpense(expenseData)
        setAmount("");
        setDate("");
        setTitle("");
        console.log(expenseData);
    }
    const formHandler = () => {
        if (showForm == true)
            setShowForm(false)
        else
            setShowForm(true)
        setAmount("");
        setDate("");
        setTitle("");
    }
    if (!showForm) {
        return (
            <div className='new-expense__control'>
                <button onClick={formHandler}>Add new expense</button>
            </div>
        )
    }
    else {
        return (

            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={title} onChange={titleHandler}></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' value={amount} min='0.01' step='0.01' onChange={amountHandler}></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={date} min='2019-01-01' max='2022-12-31' onChange={dateHandler}></input>
                    </div>

                </div>
                <div className='new-expense__actions'>
                    <button onClick={formHandler}>Cancel</button>
                    <button type='submit' >Add Expense</button>
                </div>
            </form>
        )
    }

}

export default expenseForm;