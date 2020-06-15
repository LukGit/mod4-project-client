import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: usersReducer,
  // notes: notesReducer
});

export default rootReducer;

function usersReducer (state = {user: '', notes: []}, action) {
  switch (action.type) {
    case "LOGIN":
      console.log(action)
      return {
        user: action.userData.name,
        notes: action.userData.notes
      }
    default:
      return state
    }
}