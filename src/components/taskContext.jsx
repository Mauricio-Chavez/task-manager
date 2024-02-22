import React, { createContext } from 'react'

const TaskContext = createContext({
    tasks: [],
    addTask: () => {},
    deleteTask: () => {},
    user: {},
    setUser: () => {},
    isloggin: false,
    setIsloggin: () => {},
})


export default TaskContext