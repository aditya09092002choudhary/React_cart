import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-3"
        style={{borderRadius:"0px"}}
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <div className="col-6 bg-dark text-white text-center">
        {props.totalAmount}
      </div>
      <button className="btn btn-primary col-3" style={{borderRadius:"0px"}}>Pay Now</button>
    </div>
  );
}