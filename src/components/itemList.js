import { useState, useEffect, Fragment } from "react";
import Items from "./item";

function ItemList() {
  const [cards, setCards] = useState("");
  const [loading, isLoading] = useState(false);

  const listing = () => {
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
      const items = await listing();
      setCards(items);
    }
    fetchedItems();
  }, []);

  return (
    <Fragment>
      {!loading
        ? cards
        : cards.map((element) => (
            <Items
              id={element.ID}
              title={element.title}
              image={element.image}
              category={element.category}
              price={element.price}
              stock={element.stock}
            />
          ))}
    </Fragment>
  );
}
export default ItemList;
