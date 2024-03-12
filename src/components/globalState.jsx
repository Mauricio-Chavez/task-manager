import TaskContext from "./taskContext";
import React, { useState } from 'react'

function GlobalState(props) {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        setTasks([...tasks, task])
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task._id !== id))
    }
    const [user, setUser] = useState({})
    const [isloggin, setIsloggin] = useState(false)
    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            setTasks: setTasks,
            addTask: addTask, 
            deleteTask: deleteTask, 
            user: user, 
            setUser:setUser, 
            isloggin:isloggin, 
            setIsloggin:setIsloggin
            }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default GlobalState