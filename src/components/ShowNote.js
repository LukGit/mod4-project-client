import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'


const ShowNote = (props) => {
  console.log("id=", props.match.params, props.notes)
  const noteSelect = props.notes.find(note => note.id === parseInt(props.match.params.id))
  console.log(noteSelect)
  const note = 
  <div>
  <div className="note-line">
    <p>{noteSelect.title}</p>
    <p>{noteSelect.content}</p>
    <Link to={'/notes'} className='item'>Back to All Notes</Link> 
  </div>
</div>
  // debugger
  // console.log(window.props)
  return note
//   <div>
//   <div className="note-line">
//     <p>in show note</p><button>View</button><button>Edit</button><br/>
//     <p>in show note content</p>
//   </div>
// </div>
}

const mapStateToProps = state => {
  console.log(state)
  return { notes: state.notes }
}

export default connect(mapStateToProps)(ShowNote) 