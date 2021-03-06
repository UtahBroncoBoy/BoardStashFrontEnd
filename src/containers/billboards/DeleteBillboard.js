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

export default class DeleteBillboard extends Component {
  constructor(props){
    super(props);
    this.state = {billboard: {}};
  }

  deleteBillboard = billboard => {

    fetch(`https://still-garden-21684.herokuapp.com/billboards/${billboard.faceNumber}`, {method: 'delete', mode:'cors'})
  }

  handleSubmit = e => {
      e.preventDefault();
      let billboard = {};
      billboard.faceNumber = this.state.faceNumber;
      this.deleteBillboard(billboard);
      alert(`Billboard #${this.state.faceNumber} has been deleted.`)
      //figure out how to cause the app component to rerender instead of doing a full reload.
      window.location.reload(true);
  }

  render() {
    return(
      <div style={{...styles}}>
        <form onSubmit={this.handleSubmit} method="post" name="form">
          <div>
            <h3>Delete Board:</h3>
            <label htmlFor="faceNumber">Face Number: </label>
            <input 
              type="text" 
              id="faceNumber" 
              name="faceNumber"
              onChange={ e => this.setState({faceNumber: e.target.value})}
            />
          </div>
          <br />
          <div className="button">
            <button type="submit">Delete Billboard</button>
          </div>
          
        </form>
      </div>
    )
  }
}
