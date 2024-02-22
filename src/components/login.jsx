import React, { useContext } from 'react'
import UserService from '../services/userService'
import { useNavigate } from 'react-router-dom'
import TaskContext from './taskContext'


function Login(props) {
    const setUser = useContext(TaskContext).setUser
    const isLogged = useContext(TaskContext).setIsloggin
    const navigate = useNavigate()
    async function handleSubmit(e) {
        const userService = new UserService()
        e.preventDefault()
        let user = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const userFound = await userService.Login(user);
        console.log(userFound)  
        if(userFound){
            setUser(user)
            isLogged(true)
            navigate('/home')
        }

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="text" placeholder='email' name='email'/>
                <input type="text" placeholder='password' name='password'/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login