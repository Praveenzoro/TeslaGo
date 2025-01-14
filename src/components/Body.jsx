import React from "react";
import '../style/styles.css';

function Body(props){

   return  <div className="Section">
 
<div className="Media">
    
        {props.VID ? (
          <video  autoPlay loop muted>
            <source src={props.VID} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </div>

      {!props.VID ? (
  <div className="overall">
 
    <div className="Images">
      <img className="Bgm" src={props.IMG} alt="Car" />
    </div>
    <div className="text">
  <h1>{props.TITLE}</h1>
 <h2>{props.DESC}</h2>  
  <h4>{props.PRICE}</h4>

  
</div>
    <div className="Bot">
      <button className="Bot1">Order Now</button>
      <button className="Bot2">Learn More</button>
    </div>
  </div>
) : null}   

</div>


}

export default Body;