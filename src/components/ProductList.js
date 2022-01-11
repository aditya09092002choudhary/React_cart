import React from "react";
import Product from './Product.js';

export default function ProductList(props) {
  console.log(props);
  return (
      props.productList.length>0 ?
    props.productList.map((product,i)=>{
        return <Product product = {product} key={i} increamentQuantity = {props.increamentQuantity} decreamentQuantity={props.decreamentQuantity} removeItem={props.removeItem} index={i}/>
    })
    : <h1>No Product Exists in the Cart</h1>
  );
}
