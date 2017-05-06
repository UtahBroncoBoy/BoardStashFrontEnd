import React, { Component } from 'react';
import './App.css';
import Routing from './Routing';


const billboard = { id: 'testID', faceNumber: 'testFaceNumber', rate: 'testRate' }

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>BoardStash</h1>
        </div>
        <p className="App-intro">
        </p>
        <div className="Billboard">
          <Routing />
        </div>
      </div>
    );
  }
}

export default App;
