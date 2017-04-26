import React, { Component } from 'react';
import './App.css';
import ViewBillboard from './components/ViewBillboard';

const billboard = { id: 'testID', faceNumber: 'testFaceNumber', rate: 'testRate' }

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Reagan Billboard Inventory</h2>
        </div>
        <p className="App-intro">
          View all billboards below.
        </p>
        <div className="Billboard">
          <ViewBillboard billboard={billboard}/>
          <ViewBillboard billboard={billboard}/>
          <ViewBillboard billboard={billboard}/>
        </div>
      </div>
    );
  }
}

export default App;
