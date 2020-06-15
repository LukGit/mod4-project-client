import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import NoteCard from './NoteCard'

class Notes extends Component {
  render() {
    
    console.log("here in Notes", this.props.notes)
  
    return (
      
      <div>
        <Navbar icon="paint brush" title="FlatNote" description="out app" />
        {this.props.notes.map(note => <NoteCard note={note}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { notes: state.users.notes }
}

export default connect(mapStateToProps)(Notes)
