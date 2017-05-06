import React, {Component} from 'react';

import BillboardItem from './billboardItem';

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {billboards: []};
  }

  componentDidMount() {
    fetch('http://localhost:4343/billboards/')
      .then(response => response.json())
      .then(billboards => this.setState({billboards}))
      .catch(console.error);
  }

  render() {

    return (
      <div>
        <h1>Full List of Billboards</h1>

        {this.state.billboards.map(billboard => BillboardItem(billboard))}

      </div>
    );
  }

}
