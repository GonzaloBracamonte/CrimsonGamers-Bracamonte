import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);
export const CartProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  console.log(product);
  const isInCart = (id) => {
    const found = product.find((product) => product.id === id);
    return found;
  };
  const addItem = (item, qty) => {
    const newProduct = {
      ...item,
      qty,
    };
    if (isInCart(item.id)) {
      const found = product.find((product) => product.id === item.id);
      const productIndex = product.indexOf(found);
      const auxArray = [...product];
      auxArray[productIndex].qty += qty;
      setProduct(auxArray);
    } else {
      setProduct([...product, newProduct]);
    }
  };

  const removeItem = (id) => {
    setProduct(product.filter((i) => i.id !== id));
  };
  const clearItems = () => {
    setProduct([]);
  };
  const totalPrice = () => {
    return product.reduce((prev, act) => prev + act.qty * act.price, 0);
  };
  const getItemQuantity = () => {
    return product.reduce((acumulator, item) => (acumulator += item.qty), 0);
  };

  return (
    <CartContext.Provider
      value={{
        product,
        addItem,
        removeItem,
        clearItems,
        totalPrice,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
