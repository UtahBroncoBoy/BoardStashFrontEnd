import React, {Component} from 'react';

export default class NewBillboard extends Component {
  constructor(props){
    super(props);
    this.state = {billboard: {}};
  }

  createBillboard = billboard => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(`https://still-garden-21684.herokuapp.com/billboards`, {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(billboard),
      headers: myHeaders
    })
      .catch(err=>console.error(err));
  }

  handleSubmit = e => {
    e.preventDefault();
    let billboard = {};
    billboard.faceNumber = this.state.faceNumber;
    billboard.rateLevel = this.state.rateLevel;
    this.createBillboard(billboard);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} method="post" name="form">
          <div>
            <label htmlFor="faceNumber">Face Number</label>
            <input 
              type="text" 
              id="faceNumber" 
              name="faceNumber"
              onChange={ e => this.setState({faceNumber: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="rateLevel">Rate Level</label>
            <input 
              type="text" 
              id="rateLevel" 
              name="rateLevel"
              onChange={ e => this.setState({rateLevel: e.target.value})}
            />
          </div>
          <div className="button">
            <button type="submit">Add Billboard</button>
          </div>
          
        </form>
      </div>
    )
  }
}