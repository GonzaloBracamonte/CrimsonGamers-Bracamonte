import React from "react";
import { Link } from "react-router-dom";
import Button from "./buyingButton";
import "./styles/item.css";
import ItemCount from "./itemCount";

const Items = (props) => {
  return (
    <div key={props.title} className="card">
      <div className="descriptionContainer">
        <Link to={`item/${props.id}`}>
          <h3>{props.title}</h3>
        </Link>
        <img alt={`product ${props.category}`} src={props.image} />
        <h4>{`Price: $${props.price}`}</h4>
        <p>{props.description}</p>
        <p>{props.category}</p>
        <div className="buttonContainer">
          <Button />
        </div>
        <div>
          <ItemCount stock={props.stock} initial={0} />
          <Link to={`item/${props.id}`}>View</Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
