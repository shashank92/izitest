export const sortOrders = {
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
  CREATION_DATE: 'CREATION_DATE'
};

export const compareFunctions = {
  FIRST_NAME(a, b) {
    const aNameFirst = a.name.first || '';
    const bNameFirst = b.name.first || '';
    return aNameFirst.localeCompare(bNameFirst);
  },
  LAST_NAME(a, b) {
    const aNameLast = a.name.last || '';
    const bNameLast = b.name.last || '';
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
  last: ''
}, formatType = 'STANDARD') {
  const { first = '', last = '' } = name;
  switch (formatType) {
    case formatTypes.LAST_NAME_FIRST:
      return `${last}, ${first}`;
    case formatTypes.STANDARD:
    default:
      return `${first} ${last}`;
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
