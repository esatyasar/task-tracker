import React from 'react'
import "./List.css"


function List({tasks, deleteItem, changeBg}) {
    return (
        <div>
            <div>
            {tasks.map((item) =>
                <div  className={item.isDone ? "bg-success":"bg-warning"} key={item.id}>
                    <ul >
                        <li>{item.text}</li>
                        <li>{item.day}</li>
                        <li>{item.category}</li>
                    </ul>
                    <div className="icons">
                        <button onClick={()=>deleteItem(item.id)}><i className="fas fa-trash trash"></i> </button>
                        <button onClick={() =>changeBg(item.id)}><i className={item.isDone ? "fas fa-times check":"fas fa-check check"}></i></button>
                    </div>
                    
                </div>         
            )}
         
            </div>
            
        </div>
    )
}

export default List
