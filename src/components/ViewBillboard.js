import React, {Component} from 'react';

export default class ViewBillboard extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.billboard};
  }
  render() {
    return (
      <div>
        <h1>Billboard Face Number: {this.state.faceNumber}</h1>
        <h2>Current Billboard Rate: ${this.state.rate}</h2>
      </div>
    )
  }
}