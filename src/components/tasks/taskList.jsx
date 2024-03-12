import React, { useContext, useEffect, useState } from 'react'
import TaskService from '../../services/taskService'
import Task from './task'
import TaskContext from '../taskContext'

function TaskList() {
    const tasks = useContext(TaskContext).tasks;
    const setTasks = useContext(TaskContext).setTasks;
    const user = useContext(TaskContext).user
    async function loadTask(){
        let res = await TaskService.getTasks(user)
        setTasks(res)
    }

    useEffect(() => {
        loadTask()
    }, [])

    return (
        <div>
            <h1>Task List</h1>
            { 
                tasks?.map((task) => <Task task={task} />)
            }
        </div>
    )
}

export default TaskList