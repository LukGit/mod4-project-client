import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { Form, Grid } from 'semantic-ui-react'


class NoteForm extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const NOTE_URL = 'http://localhost:3000/notes'
    const reqObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        user_id: this.props.userId
      })
    }
    fetch(NOTE_URL, reqObj)
    .then(resp => resp.json())
    .then(userData => {
      this.props.addNote(userData)
      this.props.history.push('/notes')
    })
  }

  render() {
    if (!this.props.userId){
      this.props.history.push('/login')
      return null
    }
    return (
      <div>
        <Navbar/>
        <Grid>
        <Grid.Row centered>
        <Form onSubmit={this.handleOnSubmit} style={{width: 800}}>
        
            <Form.Field>
              <label>Note Title</label>
              <input
                placeholder="title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Note Content</label>              
              <textarea
                placeholder='Your notes here...'
                style={{ minHeight: 100 }}
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Button>
              Submit
            </Form.Button>
        </Form>
        </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { userId: state.users.userId }
}

export default connect(mapStateToProps, {addNote})(NoteForm)
