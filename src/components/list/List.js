import React from 'react'
import Success from "../success/Success"

function List({tasks, deleteItem, addSuccess}) {
   
    return (
        <div>
            <div>
            {tasks.map((item) =>
                <div key={item.id}>
                    <ul>
                        <li>{item.text}</li>
                        <li>{item.day}</li>
                        <li>{item.category}</li>
                    </ul>
                    <div>
                    <button onClick={()=>deleteItem(item.id)}><i className="fas fa-times"></i></button>
                    <button onClick ={()=>addSuccess(item.isDone)}><i className="fas fa-check"></i></button>
                    </div>
                    {item.isDone && <Success /> }
                    
                    
                </div>
            )}
            </div>
        
        </div>
    )
}

export default List
