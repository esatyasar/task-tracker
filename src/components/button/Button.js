import React,{useState} from 'react'
import Form from "../form/Form"
import List from "../list/List";


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

    const addSuccess = (item) =>{
        return !item
    }
   
    return (
        <div>
            <button onClick={toggle}>{isValid ? show: hide} </button>
            {!isValid && <Form tasks = {tasks} setTasks={setTasks} />}
            <List deleteItem={deleteItem} tasks={tasks} addSuccess={addSuccess} />
        </div>
        
    )
}

export default Button
