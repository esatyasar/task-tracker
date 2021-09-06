import React,{useState} from 'react'
import "./Button.css"
import Form from "../form/Form"
import List from "../list/List"




function Button() {
    const [tasks, setTasks] = useState([{id:0, text:"project", day:"thursday", category:"office", isDone:false }])
    const [isValid, setIsValid] = useState(true)
    
    
 
    const toggle = () =>{
        setIsValid(!isValid)
    }
    const show = "Show Create a Task Bar";
    const hide = "Hide Create a Task Bar";

    const deleteItem = (itemId) =>{
        let filtered = tasks.filter((item) =>{
            return (item.id !== itemId)
        })
        setTasks(filtered)
    }

    const changeBg = (id) => 
        setTasks(tasks.map((item) => 
                item.id === id ? {...item, isDone: !item.isDone} : item     
    )
  ) ;



    return (
        <div className="btn">
            <button className="showbtn" onClick={toggle}>{isValid ? show: hide} </button>
            {!isValid && <Form tasks = {tasks} setTasks={setTasks} />}
            <List deleteItem={deleteItem} tasks={tasks} changeBg={changeBg}/>
        </div>
        
    )
}

export default Button
