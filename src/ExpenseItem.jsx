
import './App.css'

function ExpenseItem({expense , onDelete}) {


    return(
       <li>
            {expense.name} - €{expense.amount.toFixed(2)} - {expense.category}
            <button onClick={() => onDelete(expense.id)}>Delete</button>
          </li>
    )
       
    
}

export default ExpenseItem;