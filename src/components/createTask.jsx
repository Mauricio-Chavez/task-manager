import React, { useContext } from 'react'
import TaskService from '../services/taskService'
import TaskContext from './taskContext'

function CreateTask() {
    let user = useContext(TaskContext).user
    function handleSubmit(e){
        e.preventDefault()
        let task = {
            title: e.target.title.value,
            description: e.target.description.value,
            dueDate: e.target.date.value,
            user_email: user.email
        }
        TaskService.Save(task)
        e.target.reset()
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1>Create Task</h1>
                <input type="text" placeholder='Title' name='title'/>
                <input type="text" placeholder='Description' name='description'/>
                <input type="datetime-local" placeholder='Due Date' name='date'/>

                <button type='submit'>Create Task</button>
            </form>
        </div>
    )
}

export default CreateTask