//list cars first component
import React from "react";
import Onecar from "./Onecar"

const Allcars = (props) => (
  <div>
{ props.data.map(element=>
        {return <Onecar data={element}/>
    }
    )}
  </div>
);
export default Allcars
