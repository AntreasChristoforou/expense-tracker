import { CATEGORIES } from './categories';



function FilterBar({setFilter}) {

    
    return(
        
        <div>
        <button onClick={() => setFilter("All")}>All</button>
        {CATEGORIES.map(category => 
        <button key={category} onClick={() => setFilter(category)}>{category}</button>
        )}      
        </div>
      
    )
       
    
}

export default FilterBar;