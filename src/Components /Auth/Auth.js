import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { userUpdate } from './../../ducks/reducer'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.loginUser = this.loginUser.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }

    handleChange(name, value) { 
        this.setState({ [name]: value })
    }

    loginUser() {
        axios 
            .post('/api/auth/login', this.state)
            .then(res => {
                this.props.userUpdate(res.data)
                this.props.history.push('/dashboard')
            })
    }

    registerUser() {
        axios
            .post('/api/auth/register', this.state)
            .then(res => {
                this.props.userUpdate(res.data)
                this.props.history.push('/dashboard')
            })
    }

    render() {
        console.log(this.props)
        return (
            <div className='display-container'>
                <div className='box-medium'>
                    <h1>Helo</h1>
                    <div className='input-row'>
                        <label className='input-title'>
                            Username:{' '}
                        </label>
                        <input type='text' value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} />
                        <label className='input-title'>
                            Password:{' '}
                        </label>
                        <input type='password' value={this.state.password} onChange={e => this.handleChange('password', e.target.value)}/>
                        <br/>
                        <button onClick={this.loginUser}>Log In</button> 
                        <button onClick={this.registerUser}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {userUpdate})(Auth);
