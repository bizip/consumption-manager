import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
const [expenseTitle, setstate] = useState(props.expenseTitle)
const handleClick=()=>{
  setstate("You make sit pascal")
}
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${props.expensePrice}</div>
      </div>
      <button onClick={handleClick}>Change title</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;