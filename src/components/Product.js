import React from "react";

export default function Product(props) {
  return (
    <div className="container row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}{" "}
          <span className="badge bg-secondary">₹ {props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            props.decreamentQuantity(props.index);
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
            props.increamentQuantity(props.index);
          }}
        >
          +
        </button>
      </div>
      <div className="col-2">
        <span> {props.product.quantity * props.product.price}</span>
      </div>
      <div className="col-2">
        <button
          className="btn btn-danger "
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
