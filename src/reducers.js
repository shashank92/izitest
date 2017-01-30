import { compareFunctions } from './helpers';

const initialState = {
  memorials: [],
  sortOrder: 'CREATION_DATE'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SORT_BY_FIRST_NAME':
      return Object.assign({}, state, {
        memorials: state.memorials.concat()
          .sort(compareFunctions.FIRST_NAME),
        sortOrder: 'FIRST_NAME'
      });
    case 'SORT_BY_LAST_NAME':
      return Object.assign({}, state, {
        memorials: state.memorials.concat()
          .sort(compareFunctions.LAST_NAME),
        sortOrder: 'LAST_NAME'
      });
    case 'SORT_BY_CREATION_DATE':
      return Object.assign({}, state, {
        memorials: state.memorials.concat()
          .sort(compareFunctions.CREATION_DATE),
        sortOrder: 'CREATION_DATE'
      });
    case 'UPDATE_MEMORIALS':
      return Object.assign({}, state, {
        memorials: action.data.concat()
          .sort(compareFunctions[state.sortOrder])
      });
    default:
      return state;
  }
}
