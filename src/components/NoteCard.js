import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class NoteCard extends Component {

  render() {
    const note = this.props.note
    const link = `/notes/${note.id}`
    const linkedit = `/notes/edit/${note.id}`
    return (
      <div className="note-line">
        <div>
        <p>{note.title}</p>
        <Link to={link} className='item'>View</Link> 
        <Link to={linkedit} className='item'>Edit</Link> 
        </div>
        <div>
        <p>{note.content}</p>
        </div>
      </div>
    
    )
  }
}

export default NoteCard









