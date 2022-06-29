//list cars first component
import React from "react";
import App from "../App";

const Onecar = (props) => (
  <div className="container" >
    <img alt="" src={props.data.imgUrl} onClick={()=>{props.getOneCar()}}/>
    <h3 className="h3" onClick={()=>{props.changeView("onePost",props.data)}}>{props.data.car}</h3><br></br>
    <h4 className="h4">{props.data.price} </h4><br></br>
    <p>{props.data.disc} </p><br></br>
    <div className="btn">
    <button className="edit">Edit</button><br></br>
    <button className="delete"onClick={()=>{props.delcar()}}>Delete</button>
    </div>
  </div>
);
export default Onecar
