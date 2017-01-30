# izitest

## Project

1.      Set up a github repository for the project, call it izitest
2.      Initialize a React application (use redux if you’re feeling spry but it’s not required)
3.      Use our endpoint which will return 10 memorials, and display the name and creation date of each memorial, sorted in order of creationDate. a. Endpoint: https://dev.requiemapp.com/public/memorial/random
4.      Create a button on the page that when pressed will switch the sorting on the list to last name of the decedent (name.last)
5.      Create a github repo and send us a link. Provide documentation in the readme file

## Dependencies

* [React + ReactDOM](https://facebook.github.io/react/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Redux + ReactRedux](http://redux.js.org/)
* [Fetch](https://github.com/github/fetch)

## Installation
    [npm|yarn] install
    [npm|yarn] start

## Documentation

### actions.js

This module defines action creators for each action:

1. SORT\_BY\_FIRST\_NAME
2. SORT\_BY\_LAST\_NAME
3. SORT\_BY\_CREATION\_DATE
4. UPDATE\_MEMORIALS

### reducers.js

#### State Structure

The initial state comprises an empty memorials array and an initial sort order of `CREATION_DATE`. Keeping track of the sort order is useful for determines how the names are displayed.

#### Sorting

Since `Array.prototype.sort()` sorts the array in-place, a copy of the original memorials array is sorted instead for the state update. Read-only state and pure reducer functions are two of the [three principles of Redux](http://redux.js.org/docs/introduction/ThreePrinciples.html).

`compareFunctions` are imported from the `helpers` module in order to keep the reducer code as simple as possible.

#### Update Memorials

The `UPDATE_MEMORIALS` action is triggered whenever the app gets a response from the endpoint. Currently, only one request is made to the endpoint after the `MemorialTable` component is mounted.

## Thanks
Thanks to [IZI Mobile](http://izimobile.com/) for the project and usage of the endpoint.
