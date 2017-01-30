import React, { Component } from 'react';
import { MemorialTable, SortButtons, RefreshButton } from './containers';
import styles from './App.css';

class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 App-column">
            <h2>Memorial Sort</h2>
            <h5>Coding exercise for IZI Mobile</h5>
            <SortButtons />
            <MemorialTable />
            <RefreshButton />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
