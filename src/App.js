import React, { Component } from 'react';
import { MemorialTable, SortButtons } from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 App-column">
            <h2>Sorting Memorials</h2>
            <h5>React + Redux project for IZI Mobile</h5>
            <SortButtons />
            <MemorialTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
