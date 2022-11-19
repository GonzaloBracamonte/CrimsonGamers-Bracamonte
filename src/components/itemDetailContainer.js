import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import Items from "./item";

function ItemDetailCOntainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", id);
    getDoc(queryDoc).then((res) => setProduct({ id: res.id, ...res.data() }));
  }, [id]);

  return product.price ? (
    <ItemDetail product={product} />
  ) : (
    <Items>
      <Items.Header as="h5"></Items.Header>
      <Items.Body>
        <Items.Title>Product not found</Items.Title>
        <Items.Text>Click here to go back</Items.Text>
      </Items.Body>
    </Items>
  );
}

export default ItemDetailCOntainer;
