import React, {Component} from 'react';

import BillboardItem from './BillboardItem';

const styles = {
  color: '#5B2C6F',
  display: 'inline-block',
  width: '60%',
  float: 'left',
};

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {billboards: []};
  }

  componentDidMount () {
    fetch('https://still-garden-21684.herokuapp.com/billboards/')
      .then(response => response.json())
      .then(billboards => this.setState({billboards}))
      .catch(console.error);
  }

  render() {

    return (
      <div style={{...styles}}>

        {this.state.billboards.map(billboard => BillboardItem(billboard))}

      </div>
    );
  }

}
