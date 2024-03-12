import React, { createContext } from 'react'

const TaskContext = createContext({
    tasks: [],
    setTasks: () => {},
    addTask: () => {},
    deleteTask: () => {},
    user: {},
    setUser: () => {},
    isloggin: false,
    setIsloggin: () => {},
})


export default TaskContext