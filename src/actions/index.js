export const addUser = userData => {
  return {
    type: 'LOGIN',
    userData
  };
};
export const logoutUser = () => {
  return {
    type: 'LOGOUT'
  };
};
export const addNote = note => {
  return {
    type: 'ADD_NOTE',
    note
  }
}
export const updateNote = note => {
  return {
    type: 'UPDATE_NOTE',
    note
  }
}
export const deleteNote = note => {
  return {
    type: 'DELETE_NOTE',
    note
  }
}
export const sortNotes = (sortBy) => {
  return {
    type: 'SORT_NOTES',
    sortBy
  }
}

