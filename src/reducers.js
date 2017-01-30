import { compareFunctions } from './helpers';

const initialState = {
  memorials: [],
  sortOrder: 'CREATION_DATE',
  isFetching: true
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
    case 'REQUEST_MEMORIALS':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_MEMORIALS':
      return Object.assign({}, state, {
        isFetching: false,
        memorials: action.memorials.concat()
          .sort(compareFunctions[state.sortOrder])
      });
    default:
      return state;
  }
}
