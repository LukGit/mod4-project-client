import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { deleteNote } from '../actions';
import { Divider, Header, Segment, Button, Grid, Message, Form, Modal } from 'semantic-ui-react'

class ShowNote extends Component {
  state = {
    email: "",
    emailSuccess: false
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  sendEmail = (event, note) => {
    event.preventDefault()
    
    const serviceID = 'ivan.luk028@gmail.com'
    const templateID = 'luk_email_for_react'
    this.setState({
          email: '',
          emailSuccess: true
        })
    const templateParams = {
      to: this.state.email,
      subject: note.title,
      html: note.content
    }
    window.emailjs.send(
      serviceID, templateID, 
      templateParams
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  deleteThisNote = (note) => {
    
    const NOTE_URL = `http://localhost:3000/notes/${note.id}`
    fetch(NOTE_URL, {method: 'delete'})
      .then(resp => resp.json())
      .then(data => {
        this.props.history.push('/notes')
        this.props.deleteNote(data)
      })
  }

  closeModal = () => {
    this.setState({
      emailSuccess: false
    })
  }

  render () {
    if (!this.props.user.user){
      this.props.history.push('/login')
      return null
    }
    const noteSelect = this.props.notes.find(note => note.id === parseInt(this.props.match.params.id))
    const linkedit = `/notes/edit/${noteSelect.id}`
    return (
      <div>
      <Navbar/> 
      {this.state.emailSuccess ? 
      <Modal open={this.state.emailSuccess} basic size='medium' >
        <p>email sent!</p>
        <Modal.Actions>
        <Button basic color='white' inverted onClick={this.closeModal}>
          OK
        </Button>
        </Modal.Actions>
      </Modal> : null}
      <Grid>
        <Grid.Row centered>
        <Segment style={{width: 800}}>  
          <Segment raised>
            <Header as='h3'>Title</Header>
            {noteSelect.title}
            <Divider horizontal />
            <Header as='h3'>Content</Header>
            <Message>
            <p>{noteSelect.content}</p>
            </Message>
          </Segment>
          <Segment>
          <Link to={'/notes'}>
            <Button size='mini'>
              <p>Back to All Notes</p>
            </Button>
          </Link>  
          <Link to={linkedit} size='mini'>
            <Button size='mini'>
              <p>Edit</p>
            </Button>
          </Link>
          <Button onClick={() => this.deleteThisNote(noteSelect)} size='mini'>
            <p>Delete</p>
          </Button>
          </Segment>
          <Segment>
            <Form onSubmit={(event) => this.sendEmail(event, noteSelect)}>
            <Form.Group widths='equal' inline>
              <Form.Input label="E-mail Address" onChange={this.handleChange} type='text' value={this.state.email} />
              <Form.Input type='submit' value='Send Note'/>
            </Form.Group>
            </Form>
          </Segment>
        </Segment>
        </Grid.Row>
      </Grid>
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    notes: state.notes,
    user: state.users
   }
}

export default connect(mapStateToProps, {deleteNote})(ShowNote) 