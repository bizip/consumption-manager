import React, { useState } from 'react';
import './App.css';
import Expensess from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
function App() {
  const INITIAL_EXPANSE = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
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
const [expenses,setExpenses]=useState(INITIAL_EXPANSE);
const expanseHandler=(expa)=>{
setExpenses(prevExpenses=>{
  return [expa,...prevExpenses];
})
}

  return (
  <div>
  <NewExpense onAddExpanse={expanseHandler} />
  <Expensess items={expenses} />
  </div>
  );
}

export default App;
