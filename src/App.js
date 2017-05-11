import React, { Component } from 'react';
import './App.css';
import Billboards from './containers/billboards/Billboards';
import NewBillboard from './containers/billboards/NewBillboard';
import DeleteBillboard from './containers/billboards/DeleteBillboard';
import BoardStashLogo from '../public/BoardStash.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={BoardStashLogo} alt="BoardStash Logo" />
        </div>
        <p className="App-intro">
        </p>
        <div>
          <Billboards className="Billboards"/>
          <NewBillboard className="NewBillboard" />
          <DeleteBillboard className="DeleteBillboard" />
        </div>
      </div>
    );
  }
}

export default App;
