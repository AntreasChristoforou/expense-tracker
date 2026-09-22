
import './App.css'
import ExpenseItem from './ExpenseItem'

function ExpenseList({visible , onDelete}) {


    return(
      <ul>
         {
          visible.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete}/>
         ))
        }
      </ul>
    )
    
}

export default ExpenseList;