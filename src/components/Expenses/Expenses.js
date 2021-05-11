import React, { useState } from 'react'
import ExpensesFilter from '../NewExpense/ExpensesFilter'
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expenses(props){
const [filteredYear,setFilteredYear]=useState('2020');
const filteChangeHandler=(selectedYear)=>{
setFilteredYear(selectedYear);
}

const filterToYear=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
})
return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filteChangeHandler} />
    <ExpensesChart expenses={filterToYear} />
   <ExpensesList items={filterToYear} />
    </Card>
    </div>
)
}
export default Expenses;