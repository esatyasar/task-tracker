import React,{useState} from 'react'


function Form(tasks, setTasks) {
    
    const [id, setId] = useState(1);
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [category,setCategory] = useState("")
  
    const handleTextChange = (e) => setText(e.target.value);
    const handleDayChange = (e) => setDay(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleIdChange = (e) => setId(id+1);
  
    const [item,setItem] = useState({id:{id},text:{text},day:{day},category:{category}});


    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text || !day || !category){
            alert("plaese fill all fields")
        }else{
            onCreate()
        }
        handleIdChange()
        console.log(tasks)
        console.log(item)
    }

    const onCreate = (id,text,day,category) =>{
        setItem({...item, id,text,day,category})
    }

    return (
        <form onSubmit={onSubmit} >
            <div>
                <label htmlFor="task">Task</label>
                <input onChange = {handleTextChange} name="task" type="text" id="task" value={text} placeholder="enter a task name"/>
            </div>
            <div>
                <label htmlFor="category">Task Category</label>
                <select onChange={handleCategoryChange} name="category" id="category" value={category}>
                    <option value="#">Select a Category</option>
                    <option value="home">Home</option>
                    <option value="school">School</option>
                    <option value="office">Office</option>
                    <option value="friends">Friends</option>
                    <option value="generic">Generic</option>
                </select>
            </div>
            <div>
                <label htmlFor="date">Planned a date</label>
                <input onChange={handleDayChange} type="date" name="date" id="date" value={day}/>
            </div>
            <div>
                <button>
                    Save Task
                </button>
            </div>
        </form>
        
    )
}

export default Form
