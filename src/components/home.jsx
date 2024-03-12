import React, { useContext } from 'react'
import CreateTask from './createTask'
import TaskList from './tasks/taskList'
import { Navigate } from 'react-router-dom'
import TaskContext from './taskContext'

function Home(props) {
    const isLogged = useContext(TaskContext).isLogged;
    return (
        <div>
            <h1>Home</h1>
            <CreateTask />
            <TaskList />
        </div>
    )
}

export default Home