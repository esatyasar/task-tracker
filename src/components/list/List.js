import React, {useState} from 'react'

function List({tasks, deleteItem}) {
    const [change,setChange] = useState(false)

    const changeBg = ()=>{
       setChange(!change)

        
    }
    return (
        <div>
            <div>
            {tasks.map((item) =>
                <div className={change ? "bg-success":"bg-warning"} key={item.id}>
                    <ul>
                        <li>{item.text}</li>
                        <li>{item.day}</li>
                        <li>{item.category}</li>
                    </ul>

                    <button onClick={()=>deleteItem(item.id)}><i className="fas fa-trash"></i> </button>
                    <button onClick={changeBg}><i className={change ? "fas fa-times":"fas fa-check"}></i></button>
                    
                    {console.log(item)}
                
                </div>
            )}
            </div>
            
        </div>
    )
}

export default List
