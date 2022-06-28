import React from "react";
import axios from "axios";

import Cars from "./components/cars";
import data from "./dummy";
import Allcars from"./components/Allcars"
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
    axios.get("http://localhost:1128").then(data =>{
    console.log(data)
    this.setState({
      data:data
    })
    })
  }

  changeView(view) {
    this.setState({
      view,
    });
  }
  renderView() {
    if (this.state.view === "carslist") {
      return 
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
          </div>
          <div>
            <Cars />
          </div>
         
      </div><br></br>
      <div className="all">
         <Allcars data={data}/>
      </div>
    </div>
    );
  }
}

export default App;
