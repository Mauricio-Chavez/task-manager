import React from 'react'
import UserService from '../services/userService'

function Register() {
    function handleSubmit(e) {
        const userService = new UserService()
        e.preventDefault()
        console.log('entro')
        let user = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        userService.Register(user);
        console.log(user)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input type="text" placeholder='email' name='email'/>
                <input type="text" placeholder='password' name='password'/>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register