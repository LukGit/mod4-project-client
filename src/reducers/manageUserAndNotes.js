import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: usersReducer,
  notes: notesReducer
});

export default rootReducer;

function usersReducer(state = { user: '', userId: 0 }, action) {
  switch (action.type) {
    case "LOGIN":
      console.log(action)
      return {
        user: action.userData.name,
        userId: action.userData.id
      }
    default:
      return state
  }
}
function notesReducer(state = [], action) {
  switch (action.type) {
    case "LOGIN":
      return [...action.userData.notes]
    case 'ADD_NOTE':
      console.log(action)
      const newNotes = state.concat(action.note)
      return newNotes
    case 'UPDATE_NOTE':
      const index = state.findIndex(note => note.id === action.note.id)
      console.log("found array index", action, index)
      const updatedNote = action.note
      return [
        ...state.slice(0, index),
        updatedNote,
        ...state.slice(index + 1)
      ]
      // const newNotes = state.concat(action.note)
      // return newNotes
    default:
      return state
  }
}