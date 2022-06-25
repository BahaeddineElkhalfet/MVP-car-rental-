import React from "react";
import axios from "axios";
import $ from "jquery";
import Carslist from "./components/cars_list";
import Cars from "./components/cars";
import data from "./dummy";

// start with my app application
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], //data from file or data base mongoose
    };
    this.createCar = this.createCar.bind(this);
  }
  //function to add cars from data base
  componentDidMount() {
    $.ajax({
      url: "localhost:1128",
      type: "GET",
      success: (data) => {
        this.setState({
          data: data,
          view: "carslist",
        });
      },
      error: console.error(),
    });
  }

  changeView(view) {
    this.setState({
      view,
    });
  }
  renderView() {
    if (this.state.view === "carslist") {
      return <Carslist changeView={this.changeView}/>;
    } else if (this.state.view === "car") {
      return (
        <div>
          <car />
        </div>
      );
    }
  }
  createCar() {
    axios.post("/add", this.state).then(() => {
      this.componentDidMount();
    });
  }

  render() {
    return (
      <div>
        <h1 className="header">
          <span>M</span>y Car Rental
        </h1>

        <div className="nav">
          <div
            onClick={() => {
              this.changeView("carslist");
            }}
          >
            <Carslist />
          </div>
          <div>
            <Cars />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
