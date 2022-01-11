import React from "react";

export default function Product(props) {
  return (
    <div className="container" style={{marginBottom: "50px"}}>
      <div className="col-12">
        <h2>
          {props.product.name}&nbsp;
           <span className="badge bg-secondary">₹ {props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-12">
       <h6>Effective Price : {props.product.quantity * props.product.price}</h6> 
      </div>
      <button
        className="col-12 btn btn-danger"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}