import React, {Component} from 'react';

const styles = {
  border: '5px solid #5B2C6F',
  margin: '15px auto',
  padding: '15px',
  color: '#5B2C6F',
  width: '25%',
  display: 'inline-block',
  verticleAlign: 'top',
};

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
    billboard.faceNumber = parseInt(this.state.faceNumber, 10);
    billboard.rateLevel = this.state.rateLevel;
    this.createBillboard(billboard);
    alert(`Billboard #${this.state.faceNumber} was created.`)
    //figure out how to cause the app component to rerender instead of doing a full reload.
    window.location.reload(true);
  }

  render() {
    return(
      <div style={{...styles}}>
        <h3>Add New Board:</h3>
        <form onSubmit={this.handleSubmit} method="post" name="form">
          <div>
            <label htmlFor="faceNumber">Face Number: </label>
            <input 
              type="text" 
              id="faceNumber" 
              name="faceNumber"
              onChange={ e => this.setState({faceNumber: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="rateLevel">Rate Level: </label>
            <input 
              type="text" 
              id="rateLevel" 
              name="rateLevel"
              onChange={ e => this.setState({rateLevel: e.target.value})}
            />
          </div>
          <br/>
          <div className="button">
            <button type="submit">Add Billboard</button>
          </div>
          
        </form>
      </div>
    )
  }
}
