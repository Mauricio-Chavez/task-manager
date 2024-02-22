import React from 'react'
import { useState } from 'react';

function Task({task}) {
    // const [task, setTask] = useState(prop.task);
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <button>Done</button>
        </div>
    )
}

export default Task;