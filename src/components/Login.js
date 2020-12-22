import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions'
import { Form, Icon, Label, Container } from 'semantic-ui-react'


class Login extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     username: ''
  //   }
  // }
  state = {
    username: ''
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
      this.props.addUser(userData)
      this.props.history.push('/notes')
    })
  }

  render() {
    return (
      <div className={`app`}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       <Form onSubmit={this.loginUser}>
        <Form.Group widths='equal' inline>
          <Form.Input label="User name" onChange={this.handleChange} type='text' value={this.state.username} />
          <Form.Input type='submit' value='Login'/>
        </Form.Group>

       </Form>
      </div>
    )
  }
}

export default connect(null, {addUser})(Login)
