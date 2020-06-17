import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { updateNote } from '../actions';
import { Form, Grid } from 'semantic-ui-react'


class NoteEdit extends Component {
  state = {
    title: '',
    content: ''
  }

  componentDidMount () {
    if (!this.props.userId){
      this.props.history.push('/login')
      return null
    } else {
      const noteSelect = this.props.notes.find(note => note.id === parseInt(this.props.match.params.id))
      this.setState({
        title: noteSelect.title,
        content: noteSelect.content
      })
    }
  }
  

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const NOTE_URL = `http://localhost:3000/notes/${this.props.match.params.id}`
    const reqObj = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        user_id: this.state.user_id
      })
    }
    fetch(NOTE_URL, reqObj)
    .then(resp => resp.json())
    .then(userData => {
      this.props.updateNote(userData)
      this.props.history.push('/notes')
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Grid>
          <Grid.Row centered>
          <Form onSubmit={this.handleOnSubmit} style={{width: 800}}>
            <Form.Field>
              <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleOnChange}
                />
            </Form.Field>
            <Form.Field>
              <label>Content</label>
                <textarea
                  className="form-control"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleOnChange}
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
  return { 
    userId: state.users.userId,
    notes: state.notes 
  }
}

export default connect(mapStateToProps, {updateNote})(NoteEdit)
