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
      onecar:{},
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

  getOneCar(index){
        this.handleview("Onecar")
    this.setState({
      oneRecipe:this.state.recipe[index]
    })
  }

  delCar(index){
    axios.post(("http://localhost:1128/:_d"),this.state.data[index])
  }

  changeView(view) {
    this.setState({
      view,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  renderView() {
    if (this.state.view === "carslist") {
      return <Allcars cars={this.state.data} getone={this.getOneCar} />;
    } else if (this.state.view === "addCar") {
      return (
        <div>
          <Onecar />
        </div>
      );
    } else if(this.state.view==="Onecar"){
      <div><Onecar car={this.state.onecar}/></div>
    }
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
              this.changeView("addCar");
            }}
           >
            <button className="btnlist">Cars list</button>
          </div>

          <div>
            <button className="btnadd">Add a car</button>
          </div>
        </div>

        <br></br>

        <div className="all">
          <Allcars data={data} />
        </div>
      </div>
    );
  }
}

export default App;
