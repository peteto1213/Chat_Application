import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()

        const authObject = {
            'Project-ID': "aa459c71-67bf-4f64-8de8-89931a49fd68",
            'User-Name': username,
            'User-Secret': password

        }

        //username / password => chatengine -> give messages
        //works out -> logged in
        //error -> try with new username
    }

    return(
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder='username'
                        required
                    />

                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder='password'
                        required
                    />
                    <div align="center">
                        <button type='submit' className='button'>
                            <span>Login to Start Chatting</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginForm
