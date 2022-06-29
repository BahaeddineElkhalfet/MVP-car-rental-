//create or add new car to the list

import React from "react";
class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: "",
      car_color: "",
      disc: "",
    };
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.car]: event.target.value,
    });
  }
  

  render() {
    return (
      <div className="addcar">
        <h2 className="New">Add new car</h2>
        <form className="Form">
          <input
            id="car"
            type="text"
            className="car"
            placeholder="carName..."
            required
            minLength="3"
            value={this.state.car}
          /><br></br>
          <input
            id="car_color"
            type="text"
            className="car"
            placeholder="car_color..."
            required
            minLength="3"
            value={this.state.car}
          /><br></br>
          <textarea
            id="disc"
            className="textarea"
            placeholder="description..."
            required
            minLength="20"
            value={this.state.disc}
          /><br></br>

          <button className="btnadd">Add</button>
        </form>
      </div>
    );
  }
}
export default Cars;
