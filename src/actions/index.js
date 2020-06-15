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
