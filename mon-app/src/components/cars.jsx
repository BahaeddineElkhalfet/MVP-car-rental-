//create or add new car to the list

import React from "react";
class Cars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      car: '',
      price: '',
      disc: '',
      imgUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
  
  }

  handleChange(event) {
    // var newState = {};     
    //     newState[e.target.name] = e.target.value;   
    //           this.setState(newState);
    this.setState({
      [event.target.name]: event.target.value,
    
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="addcar">
        <h2 className="New">Add new car</h2>
        <form className="Form" onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            id="car"
            className="search"
            placeholder="carName..."
            minLength="3"
            value={this.state.car}
            onChange={this.handleChange}
            required
          />
          <br></br>
          <input
            type="text"
            id="car_color"
            placeholder="Price..."
            minLength="3"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br></br>
          <textarea
            type="text"
            id="disc"
            placeholder="description..."
            minLength="20"
            value={this.state.disc}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            type="url"
            id="img"
            name="img"
            placeholder="URL of img car..."
            value={this.state.imgUrl}
            onChange={this.handleChange}
          />
          <br></br>
          <button className="btnadd" >Add</button>
        </form>
      </div>
    );
  }
}
export default Cars;
