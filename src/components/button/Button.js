import React,{useState} from 'react'
import Form from "../form/Form"
import List from "../list/List";
import {InitialState} from "../InitialState";

function Button() {
    const [tasks, setTasks] = useState(InitialState)

    const [isValid, setIsValid] = useState(true)
    const toggle = () =>{
        setIsValid(!isValid)
    }
    const show = "Show Create a Task Bar";
    const hide = "Hide Create a Task Bar";
    return (
        <div>
            <button onClick={toggle}>{isValid ? show: hide} </button>
            {!isValid && <Form tasks = {tasks} setTasks={setTasks} />}
            <List tasks={tasks} />
        </div>
        
    )
}

export default Button
