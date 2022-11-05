import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Items from "./item";

function ItemDetail() {
  const [cards, setCards] = useState("");
  const [loading, isLoading] = useState(false);
  const titleID = useParams();

  const getSingleItem = () => {
    let products = require("../backend/productsMockup.json");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
        isLoading(true);
      }, 1000);
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
            .filter((product) => product.ID.includes(titleID))
            .map((element) => (
              <Items
                id={element.id}
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
