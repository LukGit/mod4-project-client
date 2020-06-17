import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import NoteCard from './NoteCard'
import { Radio, Segment } from 'semantic-ui-react'
import { sortNotes } from '../actions'

class Notes extends Component {
  state = {}

  handleChange = (e, { value }) => {
    this.setState({ value })
    this.props.sortNotes(value)
  }

  render() {
    if (!this.props.user.user){
      this.props.history.push('/login')
      return null
    }
    return (
      
      <div>
        <Navbar/>
        <Segment>Order by
        <Radio
            label='Date Added'
            name='radioGroup'
            value='added'
            checked={this.state.value === 'added'}
            onChange={this.handleChange}
          /> 
          <Radio
            label='Date Changed'
            name='radioGroup'
            value='changed'
            checked={this.state.value === 'changed'}
            onChange={this.handleChange}
          />  
        </Segment> 
        {this.props.notes.map(note => <NoteCard note={note} key={note.id}/>)}
    
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

export default connect(mapStateToProps, {sortNotes})(Notes)
