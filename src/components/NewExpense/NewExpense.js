import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense=(props)=>{
const [isEditing,setIsEditing]=useState(false);
const saveExpanseDataHandler=(enteredExpenseData)=>{
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    }
props.onAddExpanse(expenseData);
}

const startEditingHandler=()=>{
    setIsEditing(true)
}
const stopEditingHandler=()=>{
   setIsEditing(false) 
}
return (
<div className="new-expense">
{!isEditing && <button onClick={startEditingHandler}>Add new expanse</button>}
{isEditing && <ExpenseForm onSaveExpanseData={saveExpanseDataHandler} onCancel={stopEditingHandler} />}
</div>
)
}
export default NewExpense;