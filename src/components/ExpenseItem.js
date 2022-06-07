import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpensePrice from './ExpensePrice';
import {useState} from 'react';
import Card from './Card';
function ExpenseItem(props) {
  
  const [title,setTitle] = useState(props.title)

  const updateTitle = () =>{
    setTitle("Updated_title");
    console.log(title);
  }

  return (
    <Card className='expense-item'>
        <ExpenseDate date= {props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
              <div className='expense-item__price'>${props.amount}</div>
            
        </div>
        <button onClick={updateTitle}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem