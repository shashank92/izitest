export function formatted(name = {
  first: '',
  last: ''
}, formatType) {
  const { first = '', last = '' } = name;
  switch (formatType) {
    case 'LAST_NAME_FIRST':
      return `${last}, ${first}`;
    case 'STANDARD':
    default:
      return `${first} ${last}`;
  }
}

export function fetchMemorialData(dispatchFunction) {
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
      dispatchFunction(data);
    }).catch(ex => {
      console.log('parsing failed', ex);
    })
}
