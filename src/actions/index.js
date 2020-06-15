export const addUser = userData => {
  return {
    type: 'LOGIN',
    userData
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
