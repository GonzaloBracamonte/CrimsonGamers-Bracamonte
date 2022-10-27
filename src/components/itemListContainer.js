import React from "react";
import ItemList from "./itemList";
import "./styles/item.css";

const ItemListContainer = (greeting) => {
  return (
    <div className="itemFlex">
      <h1>{greeting.msg}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
