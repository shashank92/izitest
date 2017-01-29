export const sortByFirstName = {
  type: 'SORT_BY_FIRST_NAME'
}

export const sortByLastName = {
  type: 'SORT_BY_LAST_NAME'
}

export const sortByCreationDate = {
  type: 'SORT_BY_CREATION_DATE'
}

export function updateMemorials(memorials) {
  return {
    type: 'UPDATE_MEMORIALS',
    data: memorials
  }
}
