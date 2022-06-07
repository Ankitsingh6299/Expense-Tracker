import React from 'react'
import './ExpensePrice.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
function ExpensePrice(props) {

  const [filteredYear,setFilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
  const filteredResults = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
      <ExpenseChart expenses={filteredResults} />
      <ExpensesList items={filteredResults}/>
    </Card>

    </div>
    
  )
}

export default ExpensePrice