import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'


const ShowNote = () => {
  const note = 
  <div>
  <div className="note-line">
    <p>in show note</p>
    <p>in show note content</p>
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
  return { notes: state.users.notes }
}

export default connect(mapStateToProps)(ShowNote) 