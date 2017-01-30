/*
 * action creators
 */

export function sortByFirstName() {
  return {
    type: 'SORT_BY_FIRST_NAME'
  };
}

export function sortByLastName() {
  return {
    type: 'SORT_BY_LAST_NAME'
  };
}

export function sortByCreationDate() {
  return {
    type: 'SORT_BY_CREATION_DATE'
  };
}

export function updateMemorials(memorials) {
  return {
    type: 'UPDATE_MEMORIALS',
    data: memorials
  }
}
