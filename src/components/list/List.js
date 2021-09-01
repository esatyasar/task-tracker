import React from 'react'


function List({tasks}) {

    return (
        <div>
            <div>
                {tasks[0].text}
            </div>
            <div>
                {tasks[0].day}
            </div>
            <div>
                {tasks[0].category}
            </div>
        </div>
    )
}

export default List
