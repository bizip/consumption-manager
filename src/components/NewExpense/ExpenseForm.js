import { useState } from 'react'
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmout,setEnteredAmout]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const titleCangeHandler=(e)=>{
     setEnteredTitle(e.target.value)
    }
    const amountCangeHandler=(e)=>{
       setEnteredAmout(e.target.value)
    }

    const dateCangeHandler=(e)=>{
        setEnteredDate(e.target.value)
    }
    const submitHandeler=e=>{
    e.preventDefault();
    const expenseData={
        title:enteredTitle,
        amount:+enteredAmout,
        date:new Date(enteredDate)
    }
   props.onSaveExpanseData(expenseData);
    setEnteredTitle('');
    setEnteredAmout('');
    setEnteredDate('');
    }
    return (
    <form onSubmit={submitHandeler} >  
    <div className="new-expense__controls">
    <div className="new-expense__control">
    <label>Title</label>
    <input type="text" value={enteredTitle} onChange={titleCangeHandler} />
    </div>
    <div className="new-expense__control">
    <label>Amount</label>
    <input type="number" min='0.1' step='0.1' value={enteredAmout} onChange={amountCangeHandler} />
    </div>
    <div className="new-expense__control">
    <label>Date</label>
    <input type="date" min="2020-01-01" max="2023-01-01" value={enteredDate} onChange={dateCangeHandler} />
    </div>
    </div>
    <div className="new-expense-actions">
    <button type="button" onClick={props.onCancel}>Cancel</button>
    <button type="submit" >Add expense</button>
    </div> 
    </form>
    )
}
export default ExpenseForm;