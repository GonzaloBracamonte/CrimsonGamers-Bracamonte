import React from "react";
import { useState } from "react";
import "./styles/button.css";

function ItemCount({ stock, initial }) {
  const [value, setValue] = useState(initial);

  function onAdd() {
    stock > value ? setValue(value + 1) : setValue(value + 0);
  }

  function onSubtract() {
    value !== 0 ? setValue(value - 1) : setValue(value + 0);
  }
  return (
    <div>
      <p>stock: {stock}</p>
      <div>
        <button disabled={value > stock} onClick={onAdd}>
          +
        </button>
        <p>{value}</p>
        <button disabled={0 > stock} onClick={onSubtract}>
          -
        </button>
      </div>
    </div>
  );
}
export default ItemCount;
