import ExpenseItem from './ExpenseItem'
import "./ExpensesList.css";
const ExpensesList=(props)=>{
if(props.items.length ===0 ){
    return <p className="expenses-list__fallback">Found no item in the list.</p>
}
return(
<ul className="expenses-list">
    {
        props.items.map((expense)=>
    <ExpenseItem 
    key={expense.id} 
    expenseTitle={ expense.title } 
    expensePrice={expense.amount} 
    date={expense.date} 
    />
        )
    }
        </ul>
    )
}
export default ExpensesList;