import React from "react";
import Items from "./item";

const ItemList = ({ product }) => {
  return (
    <>
      <div className="map">
        {product?.map((product) => (
          <Items key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
