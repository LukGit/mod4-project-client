import React from 'react'
import Navbar from './Navbar';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { deleteNote } from '../actions';
import { Divider, Header, Segment, Button, Grid, Message } from 'semantic-ui-react'




const deleteThisNote = (props, note) => {
  console.log("delete this", props, note)
  
  const NOTE_URL = `http://localhost:3000/notes/${note.id}`
  fetch(NOTE_URL, {method: 'delete'})
    .then(resp => resp.json())
    .then(data => {
      console.log("deleted", data)
      props.history.push('/notes')
      props.deleteNote(data)
    })
}

const ShowNote = (props) => {

  

  console.log("id=", props.match.params, props.notes)
  const noteSelect = props.notes.find(note => note.id === parseInt(props.match.params.id))
  console.log(noteSelect)
  const linkedit = `/notes/edit/${noteSelect.id}`
  return (
    <div>
    <Navbar/> 
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
        <Button onClick={() => deleteThisNote(props, noteSelect)} size='mini'>
          <p>Delete</p>
        </Button>
        </Segment>
      </Segment>
      </Grid.Row>
    </Grid>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return { notes: state.notes }
}

export default connect(mapStateToProps, {deleteNote})(ShowNote) 