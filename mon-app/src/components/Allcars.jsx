//list cars first component
import React from "react";
import Onecar from "./Onecar";

const Allcars = (props) => (
  <div>
    {props.data.map((element,index) => {
      return <Onecar data={element} key={index} />;
    })}
  </div>
);
export default Allcars;
