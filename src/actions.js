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

function requestMemorials() {
  return {
    type: 'REQUEST_MEMORIALS'
  };
}

function receiveMemorials(json) {
  return {
    type: 'RECEIVE_MEMORIALS',
    memorials: json.data.map(memorial => Object.assign({
      name: {
        first: '',
        last: '',
        middle: ''
      }
    }, memorial))
  }
}

export function fetchMemorials() {
  return dispatch => {
    dispatch(requestMemorials());
    return fetch('https://dev.requiemapp.com/public/memorial/random')
      .then(response => response.json())
      .then(json => dispatch(receiveMemorials(json)))
  }
}
