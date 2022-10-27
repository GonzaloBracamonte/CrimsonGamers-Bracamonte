import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import Items from "./styles/item";

function ItemDetailContainer() {
  const [cards, setCards] = useState();
  const [loading, isLoading] = useState[true];
  const { itemTitle } = useParams();

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
              title={element.title}
              description={element.description}
              image={element.image}
              category={element.category}
              size={element.size}
              color={element.color}
              price={element.price}
              stock={element.inStock}
            />
          ))}
    </Fragment>
  );
}

export default ItemDetailContainer;
