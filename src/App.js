import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpensePrice from "./components/ExpensePrice";
import NewExpense from "./components/NewExpense";
const DUMMY_EXPENSE=[
  {
    id:"e1",
    title:"Car Insurance",
    amount:500,
    date:new Date(2020,8,22)
  },
  {
   id:"e2",
    title:"Electricity Bill",
    amount:700,
    date:new Date(2021,8,20)
    
  },
  {
    id:"e3",
    title:"Mobile recharge",
    amount:100,
    date:new Date(2022,9,1)
  }
]
function App() {

  const[expenses,setExpense] = useState(DUMMY_EXPENSE)
  const addExpenseHandler = (expends) =>{
    setExpense((prevExpense)=>{
      
      return [expends,...prevExpense] 
      
    })
    
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <ExpensePrice items={expenses} />
    </div>
  );
}

export default App;
