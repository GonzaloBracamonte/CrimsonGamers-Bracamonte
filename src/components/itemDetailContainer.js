import React from "react";
import ItemDetail from "./itemDetail";
import "./styles/item.css";

const ItemDetailContainer = (greeting) => {
  return (
    <div className="itemFlex">
      <h1>{greeting.msg}</h1>
      <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;
