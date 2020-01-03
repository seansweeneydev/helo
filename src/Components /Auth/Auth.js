import React, { Component } from 'react'
import axios from 'axios'

export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserNameInput(value) {
        this.setState({ username: value })
    }

    handlePasswordInput(value) {
        this.setState({ password: value})
    }

    // login() {
    //     const {username, password} = this.state
    //     axios 
    //         .post('')
    // }

    register() {
        const {username, password} = this.state
        axios
            .post('/api/auth/register', {username, password})
            .then(user => {
                this.setState({ username: '', password: ''})
            })
    }

    render() {
        const {username, password} = this.state
        return (
            <div className='Auth'>
                <div className='title'>Helo</div>
                    <div className='loginContainer'>
                        <input type='text' value={username} onChange={e => this.handleUsernameInput(e.target.value)}/>
                        <input type='text' value={password} onChange={e => this.handlePasswordInput(e.target.value)}/>
                        <button onClick={this.login}>Log In</button> 
                        <button onClick={this.register}>Register</button>
                    </div>
            </div>
        )
    }
}
