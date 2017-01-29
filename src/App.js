import React, { Component } from 'react';
import { MemorialTable, SortButtons, RefreshButton } from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2" style={{
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#FAFAFA'
          }}>
            <h2>Memorial Sort</h2>
            <p>A coding exercise for IZI Mobile.</p>
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
