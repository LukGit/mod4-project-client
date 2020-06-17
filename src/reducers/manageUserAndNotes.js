import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: usersReducer,
  notes: notesReducer
});

export default rootReducer;

function usersReducer(state = { user: '', userId: 0 }, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.userData.name,
        userId: action.userData.id
      }
    case "LOGOUT":
      return {
        user: '',
        userId: 0
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
      const newNotes = state.concat(action.note)
      return newNotes
    case 'UPDATE_NOTE':
      const index = state.findIndex(note => note.id === action.note.id)
      const updatedNote = action.note
      return [
        ...state.slice(0, index),
        updatedNote,
        ...state.slice(index + 1)
      ]
    case 'DELETE_NOTE':
    const indexD = state.findIndex(note => note.id === action.note.id)
    return [
      ...state.slice(0, indexD),
      ...state.slice(indexD + 1)
      ]
    case "LOGOUT":
      return []
    case "SORT_NOTES":
      let sorted = []
      if (action.sortBy === 'added'){ 
        sorted = state.sort((a,b) => {
          let noteA = a.created_at
          let noteB = b.created_at
          if (noteA > noteB) {
            return -1;
          }
          if (noteA < noteB) {
            return 1;
          }
          return 0;
        })
      } else {
        sorted = state.sort((a,b) => {
          let noteA = a.updated_at
          let noteB = b.updated_at
          if (noteA > noteB) {
            return -1;
          }
          if (noteA < noteB) {
            return 1;
          }
          return 0;
        })
      }
      return sorted
    default:
      return state
  }
}