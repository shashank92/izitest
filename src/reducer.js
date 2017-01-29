const init = [];

// Array.prototype.sort() sorts in-place, but state is read-only by principle
// To circumvent this, the state array is copied first using .concat()
export default function(state = init, action) {
  switch(action.type) {
    case 'SORT_BY_FIRST_NAME':
      return state.concat().sort((a, b) => {
        const aFirstName = a.name.first || '';
        const bFirstName = b.name.first || '';
        return aFirstName.localeCompare(bFirstName);
      });
    case 'SORT_BY_LAST_NAME':
      return state.concat().sort((a, b) => {
        const aLastName = a.name.last || '';
        const bLastName = b.name.last || '';
        return aLastName.localeCompare(bLastName);
      });
    case 'SORT_BY_CREATION_DATE':
      return state.concat().sort((a, b) => {
        return a.creationDate - b.creationDate;
      });
    case 'UPDATE_MEMORIALS':
      return action.data;
    default:
      return state;
  }
}
