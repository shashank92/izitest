import React, { Component } from 'react';
import { AsyncWrapper, MemorialTable, SortButtons } from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 App-column">
            <h2>Sorting Memorials</h2>
            <h5>React + Redux project for IZI Mobile</h5>
            <AsyncWrapper>
              <SortButtons />
              <MemorialTable />
            </AsyncWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
