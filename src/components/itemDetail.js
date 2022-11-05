import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Items from "./item";

function ItemDetail() {
  const [cards, setCards] = useState("");
  const [loading, isLoading] = useState(false);
  const productID = useParams();

  const getSingleItem = () => {
    let products = require("../backend/productsMockup.json");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
        isLoading(true);
      }, 3000);
    });
  };

  useEffect(() => {
    async function fetchedItems() {
      const item = await getSingleItem();
      setCards(item);
    }
    fetchedItems();
  }, []);

  return (
    <Fragment>
      {!loading
        ? cards
        : cards
            .filter((product) => product.ID.includes(productID))
            .map((element) => (
              <Items
                id={element.ID}
                title={element.title}
                description={element.description}
                image={element.image}
                category={element.category}
                color={element.color}
                price={element.price}
                stock={element.inStock}
              />
            ))}
    </Fragment>
  );
}

export default ItemDetail;
