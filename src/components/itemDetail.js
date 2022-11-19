import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Items from "./item";
import ItemCount from "./itemCount";
import { CartContext } from "./cartContext";

function ItemDetail({ product }) {
  const [cards, setCards] = useState(0);
  const { title, description, image, category, color, price, stock } = product;
  const { addItem } = useContext(CartContext);
  function onAdd(quantity) {
    addItem(product, quantity);
    setCards(quantity);
  }

  return (
    <>
      <Items>
        <Items.Image src={image} />
        <Items.Body>
          <Items.Title>{title}</Items.Title>
          <Items.Description>{description}</Items.Description>
          <Items.Category>{category}</Items.Category>
          <Items.Price>$ {price}</Items.Price>
          <Items.Color>{color}</Items.Color>
          <p></p>
          {cards > 0 ? (
            <Link to={"/cart"}>Finish Buying</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
          )}
        </Items.Body>
      </Items>
    </>
  );
}

export default ItemDetail;
