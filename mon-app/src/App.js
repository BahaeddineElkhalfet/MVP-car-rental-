import React from "react";
import axios from "axios";
import $ from "jquery";

import Cars from "./components/cars";
import data from "./dummy";
import Allcars from "./components/Allcars";
import Onecar from "./components/Onecar";
// start with my app application
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], //data from file or data base mongoose
      onecar: {},
      view: "carslist",
    };
    this.createCar = this.createCar.bind(this);
    this.getOneCar = this.getOneCar.bind(this);
    this.delCar = this.delCar.bind(this);
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

  createCar() {
    axios.post("/add", this.state).then(() => {
      this.componentDidMount();
    });
  }

  getOneCar(index) {
    this.changeView("Onecar");
    this.setState({
      oneRecipe: this.state.recipe[index],
    });
  }

  delCar(index) {
    axios.post("http://localhost:1128/:_d", this.state.data[index]);
  }

  changeView(view) {
    this.setState({
      view,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post("/add", this.state).then(() => {
      this.componentDidMount();
    });
  }

  renderView() {
    if (this.state.view === "carslist") {
      return <Allcars data={this.state.data} getOneCar={this.getOneCar} />;
    } else if (this.state.view === "addCar") {
      return <Cars handleSubmit={this.handleSubmit} />;
    } else if (this.state.view === "Onecar") {
      <div>
        <Onecar car={this.state.onecar} />
      </div>;
    }
  }

  render() {
    return (
      <div>
        <div>
        <h1 className="header">
          <span>M</span>y Car Rental
        </h1>

        <div className="nav">
          <div>
            <button
              className="btnlist"
              onClick={() => {
                this.changeView("carslist");
              }}
            >
              Cars list
            </button>
          </div>

          <div>
            <button
              className="btnadd"
              onClick={() => {
                this.changeView("addCar");
              }}
            >
              Add a car
            </button>
          </div>
        </div>
        </div>
        <br></br>

        <div className="all">
          
          {this.renderView()}
        </div>
      </div>
    );
  }
}

export default App;
