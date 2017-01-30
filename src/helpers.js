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

export function formatName(name, sortOrder) {
  let first = name.first || '';
  let middle = name.middle || '';
  let last = name.last || '';

  switch (sortOrder) {
    case 'LAST_NAME':
      return `${last}, ${first} ${middle}`;
    case 'FIRST_NAME':
    case 'CREATION_DATE':
    default:
      return `${first} ${middle} ${last}`;
  }
}
