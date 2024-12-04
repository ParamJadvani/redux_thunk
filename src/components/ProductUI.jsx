import React from "react";
import "../css/ProductUI.css";
import { useDispatch } from "react-redux";
import methodAPI from "../redux/Action";

const ProductUI = ({ id, image, title, price, category, dispatch }) => {
  return (
    <div className="product-card" id={id}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <div className="button-container">
        <button>Upadate Product</button>
        <button onClick={()=>dispatch(methodAPI.delete(id))}>Remove Prodcut</button>
      </div>
    </div>
  );
};

export default ProductUI;
