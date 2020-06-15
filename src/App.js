import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Notes from './components/Notes'
import ShowNote from './components/ShowNote'
import NoteForm from './components/NoteForm'
import NoteEdit from './components/NoteEdit'
import { Route, Switch } from 'react-router-dom'



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path={'/login'} component={Login} />
        <Route path={'/notes/edit/:id'} component={NoteEdit} />
        <Route path={'/notes/new'} component={NoteForm} />
        <Route path={'/notes/:id'} component={ShowNote} />
        <Route path={'/notes'} component={Notes} />
        <Route path={'/'} component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
