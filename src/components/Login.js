import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  loginUser = (e) => {
    e.preventDefault()
    const USER_URL = 'http://localhost:3000/users'
    const reqObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name: this.state.username})
    }
    fetch(USER_URL, reqObj)
    .then(resp => resp.json())
    .then(userData => {
      console.log(userData)
      this.props.addUser(userData)
      this.props.history.push('/notes')
    })
  }

  render() {
    return (
      <div className={`app`}>
       <form onSubmit={this.loginUser}>
        <input onChange={this.handleChange} type='text' value={this.state.username} />
        <input type='submit' />
       </form>
      </div>
    )
  }
}

export default connect(null, {addUser})(Login)
