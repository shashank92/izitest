import { compareFunctions } from './helpers';

const initialState = {
  waitingForMemorials: true,
  sortOrder: 'CREATION_DATE',
  memorials: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'REQUEST_MEMORIALS':
      return Object.assign({}, state, {
        waitingForMemorials: true
      });
    case 'RECEIVE_MEMORIALS':
      return Object.assign({}, state, {
        waitingForMemorials: false,
        memorials: action.memorials.concat()
          .sort(compareFunctions[state.sortOrder])
      });
    case 'SORT_BY_FIRST_NAME':
      return Object.assign({}, state, {
        sortOrder: 'FIRST_NAME',
        memorials: state.memorials.concat()
          .sort(compareFunctions.FIRST_NAME)
      });
    case 'SORT_BY_LAST_NAME':
      return Object.assign({}, state, {
        sortOrder: 'LAST_NAME',
        memorials: state.memorials.concat()
          .sort(compareFunctions.LAST_NAME),
      });
    case 'SORT_BY_CREATION_DATE':
      return Object.assign({}, state, {
        sortOrder: 'CREATION_DATE',
        memorials: state.memorials.concat()
          .sort(compareFunctions.CREATION_DATE),
      });
    default:
      return state;
  }
}
