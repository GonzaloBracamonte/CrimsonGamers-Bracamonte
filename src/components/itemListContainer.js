import React, { useEffect, useState } from "react";
import ItemList from "./itemList";

import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");

    if (id) {
      const queryFilter = query(
        queryCollection,
        where("description", "==", id)
      );
      getDocs(queryFilter).then((res) =>
        setProduct(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setProduct(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    }
  }, [id]);

  return (
    <>
      <div>
        <ItemList product={product} />
      </div>
    </>
  );
}
export default ItemListContainer;
