import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { updateNote } from '../actions';


class NoteEdit extends Component {
  state = {
    title: '',
    content: ''
  }

  componentDidMount () {
    console.log(this.props)
    const noteSelect = this.props.notes.find(note => note.id === parseInt(this.props.match.params.id))
    console.log(noteSelect)
    this.setState({
      title: noteSelect.title,
      content: noteSelect.content
    })
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
      console.log(this.props, userData)
      this.props.updateNote(userData)
      this.props.history.push('/notes')
    })
  }

  render() {
    return (
      <div>
        <Navbar icon="paint brush" title="FlatNote" description="out app" />
        <form onSubmit={this.handleOnSubmit}>
        <div className="form-group">
            <label htmlFor="title" className="col-md-4 control-label">Title</label>
              <div className="col-md-5">
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleOnChange}
                />
            </div>
            <div className="form-group">
              <label htmlFor="content" className="col-md-4 control-label">Content</label>
              <div className="col-md-5">
                <textarea
                  className="form-control"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-6 col-md-offset-4">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { 
    userId: state.users.userId,
    notes: state.notes 
  }
}

export default connect(mapStateToProps, {updateNote})(NoteEdit)
