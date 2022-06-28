//list cars first component
import React from "react";


const Onecar = (props) => (
  <div>
    <img src={props.data.imgUrl}/>
    <div>{props.data.car}</div>
    <div>{props.data.price} </div>
    <div>{props.data.description} </div>
    <button>Edit</button>
    <button>Delete</button>
  </div>
);
export default Onecar
