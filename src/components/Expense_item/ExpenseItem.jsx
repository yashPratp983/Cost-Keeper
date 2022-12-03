import React, { useState } from 'react'
import './ExpenseItems.css'
import Day from './Expensedate'
import Card from './Card';
function ExpenseItem(props) {
    //const [title, setTitle] = useState(props.title);


    return (<Card className="expense-item">

        <Day date={props.date} />
        <h2 className='expense-item__description'>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>

    </Card>
    );
}
export default ExpenseItem;