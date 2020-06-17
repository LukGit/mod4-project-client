import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Segment, Grid, Button } from 'semantic-ui-react'



class NoteCard extends Component {

  render() {
    const note = this.props.note
    const link = `/notes/${note.id}`
    const linkedit = `/notes/edit/${note.id}`
    return (
      <div>
       <Grid>
         <Grid.Row centered>
          <Segment style={{width: 800}}>
            <Segment raised >
              {note.title}
          </Segment>   
          <Segment>  
            {note.content.slice(0, 30) + "..."}
          </Segment>
          <Link to={link}>
            <Button size='mini'>
              <p>View</p>
            </Button>
          </Link> 
          <Link to={linkedit}>
            <Button size='mini'>
              <p>Edit</p>
            </Button>
          </Link> 
          </Segment>
          </Grid.Row>
          </Grid>
      </div>
    
    )
  }
}

export default NoteCard









