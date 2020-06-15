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
    default:
      return state
  }
}