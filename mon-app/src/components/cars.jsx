//create or add new car to the list

import React from "react";
class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: "",
      car_color: "",
      disc: "",
      imgUrl: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.car]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="addcar">
        <h2 className="New">Add new car</h2>
        <form className="Form">
          <input
            type="text"
            id="car"
            className="search"
            placeholder="carName..."
            minLength="3"
            value={this.state.car}
          />
          <br></br>
          <input
            type="text"
            id="car_color"
            placeholder="Price..."
            minLength="3"
            value={this.state.price}
          />
          <br></br>
          <textarea
            
            id="disc"
            placeholder="description..."
            minLength="20"
            value={this.state.disc}
          />
          <br></br>
          <input
            type="url"
            id="img"
            name="img"
            placeholder="URL of img car..."
            value={this.state.imgUrl}
          />
          <br></br>
          <button className="btnadd">Add</button>
        </form>
      </div>
    );
  }
}
export default Cars;
