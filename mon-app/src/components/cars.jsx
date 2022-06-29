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
        <h1 className="New-car">New Car</h1>
        <form className="New-car-Form">
          <input
            id="car"
            type="text"
            className="search"
            placeholder="carName..."
            required
            minLength="3"
            value={this.state.car}
          />
          <input
            id="car_color"
            type="text"
            className="search"
            placeholder="car_color..."
            required
            minLength="3"
            value={this.state.car}
          />
          <textarea
            id="disc"
            className="disc."
            placeholder="description..."
            required
            minLength="20"
            value={this.state.disc}
          />

          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default Cars;
