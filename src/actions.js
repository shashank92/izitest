export const actionTypes = {
  SORT_BY_FIRST_NAME: 'SORT_BY_FIRST_NAME',
  SORT_BY_LAST_NAME: 'SORT_BY_LAST_NAME',
  SORT_BY_CREATION_DATE: 'SORT_BY_CREATION_DATE',
  UPDATE_MEMORIALS: 'UPDATE_MEMORIALS'
};

/*
 * action creators
 */

export function sortByFirstName() {
  return {
    type: actionTypes.SORT_BY_FIRST_NAME
  };
}

export function sortByLastName() {
  return {
    type: actionTypes.SORT_BY_LAST_NAME
  };
}

export function sortByCreationDate() {
  return {
    type: actionTypes.SORT_BY_CREATION_DATE
  };
}

export function updateMemorials(memorials) {
  return {
    type: actionTypes.UPDATE_MEMORIALS,
    data: memorials
  }
}
