import React from 'react'
import { useState } from 'react';
import TaskService from '../../services/taskService'

function Task({task}) {
    // const [task, setTask] = useState(prop.task);
    function handleDone() {
        const taskUpdated = {...task, status: 'Completado'}
        console.log(taskUpdated._id)
        TaskService.editTask(taskUpdated)
    }
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <button onClick={handleDone}>Done</button>
        </div>
    )
}

export default Task;