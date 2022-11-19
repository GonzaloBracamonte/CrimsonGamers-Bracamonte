import React from "react";
import { useContext } from "react";
import { CartContext } from "./cartContext";

const CartWidget = () => {
  const { getItemQuantity } = useContext(CartContext);

  return (
    <>
      <div>
        {getItemQuantity()}
        <ion-icon name="cart-outline"></ion-icon>
      </div>
    </>
  );
};

export default CartWidget;
