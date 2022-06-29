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
      id: "",
    };
    this.createCar = this.createCar.bind(this);
    this.getOneCar = this.getOneCar.bind(this);
    this.delCar = this.delCar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  //function to add cars from data base
  componentDidMount() {
    $.ajax({
      url: "http://localhost:1128/gett",
      type: "GET",
      success: (data) => {
        this.setState({
          data: data,
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
      onecar: this.state.data[index],
    });
  }

  delCar(id) {
    axios
      .delete(`http://localhost:1128/del/${id}`)
  
  }

  changeView(view) {
    this.setState({
      view,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/add", {
        car: event.target.car.value,
        price: event.target.price.value,
        disc: event.target.disc.value,
        imgUrl: event.target.imgUrl.value,
      })
      .then((resp) => {
        // this.componentDidMount();
        // console.log(resp.data);
        this.setState({
          data: resp.data,
        });
      });
  }
  edit(elem) {
    this.setState({
      view: "edit",
      id: this.state.data[elem]._id,
      newid: this.sate.data[elem],
    });
  }

  handleedit(event) {
    event.preventDefault();
    axios
      .post(`http://localhost:1128/${this.state.id}`, {
        car: event.target.car.value,
        price: event.target.price.value,
        disc: event.target.disc.value,
        imgUrl: event.target.imgUrl.value,
      })
      .then(() => {
        // this.componentDidMount();
        console.log("test");
      });
  }

  renderView() {
    if (this.state.view === "carslist") {
      return (
        <Allcars
          data={this.state.data}
          getOneCar={this.getOneCar}
          delCar={this.delCar}
        />
      );
    } else if (this.state.view === "addCar") {
      return <Cars handleSubmit={this.handleSubmit} />;
    } else if (this.state.view === "Onecar") {
      <div>
        <Onecar car={this.state.onecar} />
      </div>;
    }
     else if (this.state.view === "update") {
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
          {/* <Allcars data={data} /> */}
          {this.renderView()}
        </div>
      </div>
    );
  }
}

export default App;
