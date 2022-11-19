import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./buyingButton";
import "./styles/item.css";

const Items = ({ product }) => {
  const { title, image, color, price, stock } = product;

  return (
    <>
      <Items>
        <Items.Image src={image} />
        <Items.Body>
          <Items.Title>{title}</Items.Title>
          <Items.Color>{color}</Items.Color>
          <Items.Price>$ {price}</Items.Price>
          <Items.Stock>{stock}</Items.Stock>
          <div>
            <NavLink to={`/item/$product.id`}>
              <Button>See details</Button>
            </NavLink>
          </div>
        </Items.Body>
      </Items>
    </>
  );
};

export default Items;
