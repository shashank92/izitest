import { sortOrders, compareFunctions } from './helpers';

const initialState = {
  memorials: [],
  sortOrder: sortOrders.CREATION_DATE
};

/*
 * Array.prototype.sort() sorts in-place, but state is read-only by principle
 * To circumvent this, the memorials array is copied first using .concat()
 */
export default function(state = initialState, action) {
  switch(action.type) {
    case 'SORT_BY_FIRST_NAME':
      return Object.assign({}, state, {
        memorials: state.memorials.concat()
          .sort(compareFunctions[sortOrders.FIRST_NAME]),
        sortOrder: sortOrders.FIRST_NAME
      });
    case 'SORT_BY_LAST_NAME':
      return Object.assign({}, state, {
        memorials: state.memorials.concat()
          .sort(compareFunctions[sortOrders.LAST_NAME]),
        sortOrder: sortOrders.LAST_NAME
      });
    case 'SORT_BY_CREATION_DATE':
      return Object.assign({}, state, {
        memorials: state.memorials.concat()
          .sort(compareFunctions[sortOrders.CREATION_DATE]),
        sortOrder: sortOrders.CREATION_DATE
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
