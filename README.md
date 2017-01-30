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

To quickly start up the application on a development server:

    [npm|yarn] install
    [npm|yarn] start

The start script should automatically point your browser to http://localhost:3000/. A production build can be generated with `[npm|yarn] run build`.

This is the default behavior for apps created with Create React App.

## Documentation

### index.js

This is the entry point to the application where `ReactDOM.render()` gets called. The store gets created from the reducer and a `<Provider>` wraps the main `<App>` component so that it can give container components access to the store using the [context API](https://facebook.github.io/react/docs/context.html).

### App.js

This is the main top level presentational component for the application. It sets up a simple grid container and uses column offsets to create a centered block for the app content. This is where the Redux container components for `<SortButtons>` and `<MemorialTable>` get rendered.

### components/SortButtons.js

This is a presentational component that contains the sorting buttons which are organized into a single [button group from React-Bootstrap](https://react-bootstrap.github.io/components.html#btn-groups). It's wrapped by a container that passes down the current sort order and bound action creators as props.

### components/MemorialTable.js

This is the main presentational component which displays the name and creation date of each of the 10 memorials pulled down from the endpoint. After the component mounts, it makes a request to the endpoint using [Fetch](https://github.com/github/fetch), and triggers an action in the success handler. According to the docs, [`componentDidMount`](https://facebook.github.io/react/docs/react-component.html#componentdidmount) is a nice place to instantiate network requests that fetch data from an endpoint.

NOTE: There's some normalization done here with the name objects that come from the endpoint. Sometimes the name key that comes down from the endpoint is `undefined`. In these cases, the name object is replaced with `{first: '', middle: '', last: ''}`.

### components/index.js

This is just a convenient export of all lower level presentational components so they can be easily imported into `containers.js` using `import * as components from './components'`.

### containers.js

This module exports container components that wrap the `<SortButtons>` and `<MemorialTable>` presentational components. There's no need to change the name for the exports since they only get imported in `App.js` anyways.

The container components are created easily with the help of [connect()](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options). All that needs to be specified is how the state and dispatch functions get passed down as props to the lower level presentational components.

### actions.js

This module defines action creators for each action:

1. SORT\_BY\_FIRST\_NAME
2. SORT\_BY\_LAST\_NAME
3. SORT\_BY\_CREATION\_DATE
4. UPDATE\_MEMORIALS

The sorting actions are pretty straightforward. The `UPDATE_MEMORIALS` action is triggered whenever the app gets a response from the endpoint. Currently, only one request is made to the endpoint after the `MemorialTable` component is mounted. It's not possible to trigger this action after the initial mount.

### reducers.js

#### State Structure

The initial state comprises an empty memorials array and an initial sort order of `CREATION_DATE`. Keeping track of the sort order is useful for determining how the names are displayed.

#### Sorting

Since `Array.prototype.sort()` sorts the array in-place, a copy of the original memorials array is sorted instead for the state update. Read-only state and pure reducer functions are two of the [three principles of Redux](http://redux.js.org/docs/introduction/ThreePrinciples.html).

`compareFunctions` are imported from the `helpers` module in order to keep the reducer code as simple as possible.

### helpers.js

This module contains helpful utility functions used by other modules.

* `compareFunctions()` is a set of compare functions used by `Array.prototype.sort()` in `reducers.js` to sort the memorial data.

* `formatName()` is used by `<MemorialTable>` to decide how the name objects should be converted to strings for rendering. Usually the names follow a `${first} ${middle} ${last}` format, but if `state.sortOrder` is `LAST_NAME`, then the names will be formatted according to `${last}, ${first} ${middle}`.

NOTE: There's some normalization done here with the name objects. There are several data entries with first, middle, or last names that are either missing or null. In all these cases, an empty string is used as a placeholder.

## Thanks
Thanks to [IZI Mobile](http://izimobile.com/) for the project and usage of the endpoint.
