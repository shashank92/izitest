# izitest

## Project

1.      Set up a github repository for the project, call it izitest
2.      Initialize a React application (use redux if you’re feeling spry but it’s not required)
3.      Use our endpoint which will return 10 memorials, and display the name and creation date of each memorial, sorted in order of creationDate. a. Endpoint: https://dev.requiemapp.com/public/memorial/random
4.      Create a button on the page that when pressed will switch the sorting on the list to last name of the decedent (name.last)
5.      Create a github repo and send us a link. Provide documentation in the readme file

## Installation

To quickly start up the application on a development server:

    [npm|yarn] install
    [npm|yarn] start

The start script should automatically point your browser to http://localhost:3000/. A production build can be generated with `[npm|yarn] run build`.

This is the default behavior for apps created with Create React App.

## Documentation

### index.js

This is the entry point to the application where `ReactDOM.render()` gets called. The `<Provider>` is passed a `store` and wraps the main `<App>` component so that it can give container components access to the store using the [context API](https://facebook.github.io/react/docs/context.html).

### configureStore.js

`configureStore()` is a common pattern for creating a store with middleware. In this case, `thunk` was added to allow for [async actions](http://redux.js.org/docs/advanced/AsyncActions.html).

### App.js

This is the main top level presentational component for the application. It sets up a simple grid container and uses column offsets to create a centered block for the app content. The main app content consists of an `<AsyncWrapper>` around `<SortButtons>` and `<MemorialTable>`.

### components/AsyncWrapper.js

This is just a special wrapper component that displays "Fetching memorial data..." as long as `props.waitingForMemorials`. If the value is false, it just renders its children instead.

After the component mounts, it makes a request to the endpoint using [Fetch](https://github.com/github/fetch), and triggers an action in the success handler. According to the docs, [`componentDidMount`](https://facebook.github.io/react/docs/react-component.html#componentdidmount) is a good place to instantiate network requests that fetch data from an endpoint.

### components/SortButtons.js

This is a presentational component that contains the sorting buttons which are organized into a single [button group from React-Bootstrap](https://react-bootstrap.github.io/components.html#btn-groups). It's wrapped by a container that passes down the current sort order and bound action creators as props.

### components/MemorialTable.js

This is the main presentational component which displays the name and creation date of each of the 10 memorials pulled down from the endpoint. The sorting happens at the state level, so sorting is unnecessary at this point.

### actions.js

This module defines action creators for each action. The sorting actions are straightforward.

`fetchMemorials` becomes a thunk action creator thanks to the `redux-thunk` middleware. The middleware allows an action creator to return a function which accepts the `dispatch()` function. Having access to `dispatch()` in the function body enables the action creator to call other actions within the function body, which makes writing the async `fetch` code pretty simple. The thunk action creator just dispatches the simpler synchronous actions `requestMemorials()` and `receiveMemorials()` at the appropriate times (before and after the fetch request is in flight respectively).

NOTE: There's some normalization done here with the name objects that come from the endpoint. Sometimes the name key that comes down from the endpoint is `undefined`. In these cases, the name object is replaced with `{first: '', middle: '', last: ''}`.

### reducers.js

#### State Structure


    const initialState = {
      waitingForMemorials: true,
      sortOrder: 'CREATION_DATE',
      memorials: []
    };

`waitingForMemorials` is used to determine whether or not to display the "Fetching memorial data" message. Keeping track of the sort order is useful for determining how the names are displayed. The `memorials` key just holds the memorial data.

#### Sorting

Since `Array.prototype.sort()` sorts the array in-place, a copy of the original memorials array is sorted instead for the state update. Read-only state and pure reducer functions are two of the [three principles of Redux](http://redux.js.org/docs/introduction/ThreePrinciples.html).

`compareFunctions` are imported from the `helpers` module in order to keep the reducer code as simple as possible.

### helpers.js

This module contains helpful utility functions used by other modules.

* `compareFunctions` are used by `Array.prototype.sort()` in `reducers.js` to sort the memorial data.

* `formatName()` is used by `<MemorialTable>` to decide how the name objects should be converted to strings for rendering. Usually the names follow a `${first} ${middle} ${last}` format, but if `state.sortOrder` is `LAST_NAME`, then the names will be formatted according to `${last}, ${first} ${middle}`.

NOTE: There's some normalization done here with the name objects. There are several data entries with first, middle, or last names that are either missing or null. In all these cases, an empty string is used as a placeholder.

### containers

This module exports container components that wrap the presentational components. The container components are created easily with the help of [connect()](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options). All that needs to be specified is how the state and dispatch functions get passed down as props to the lower level presentational components.

## Additional Notes

Not all of the memorial data returned from the endpoint has valid names for this project. Two memorial data objects are missing names. Three of the remaining data entries have missing last names. In all of these edge cases, the missing names have been replaced with the empty string.

## Thanks
Thanks to [IZI Mobile](http://izimobile.com/) for the project and usage of the endpoint.
