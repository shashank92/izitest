export const sortOrders = {
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
  CREATION_DATE: 'CREATION_DATE'
};

export const compareFunctions = {
  FIRST_NAME(a, b) {
    let aNameFirst = a.name.first || '';
    let bNameFirst = b.name.first || '';
    return aNameFirst.localeCompare(bNameFirst);
  },
  LAST_NAME(a, b) {
    let aNameLast = a.name.last || '';
    let bNameLast = b.name.last || '';
    return aNameLast.localeCompare(bNameLast);
  },
  CREATION_DATE(a, b) {
    return a.creationDate - b.creationDate;
  }
};

export const formatTypes = {
  STANDARD: 'STANDARD',
  LAST_NAME_FIRST: 'LAST_NAME_FIRST'
}

export function formatName(name = {
  first: '',
  middle: '',
  last: ''
}, formatType = 'STANDARD') {
  let first = name.first || '';
  let middle = name.middle || '';
  let last = name.last || '';
  
  switch (formatType) {
    case formatTypes.LAST_NAME_FIRST:
      return `${last}, ${first} ${middle}`;
    case formatTypes.STANDARD:
    default:
      return `${first} ${middle} ${last}`;
  }
}

/*
 * A bound action creator is a function that passes the result of the action
 * creator to dispatch.
 * See http://redux.js.org/docs/basics/Actions.html#action-creators
 */
export function fetchMemorialData(boundActionCreator) {
  fetch('https://dev.requiemapp.com/public/memorial/random')
    .then(response => response.json())
    .then(json => json.data.map(memorial => Object.assign(memorial, {
      name: memorial.name || {
        first: '',
        last: '',
        middle: ''
      }
    })))
    .then(data => {
      boundActionCreator(data);
    }).catch(ex => {
      console.log('parsing failed', ex);
    })
}
