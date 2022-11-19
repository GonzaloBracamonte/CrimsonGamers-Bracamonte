import React from "react";
import { useContext } from "react";
import { CartContext } from "./cartContext";
import { Button, Table } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState } from "react";
import Items from "./item";

const Cart = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sentOrder, setSentOrder] = useState(false);
  const [orderId, setOrderId] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "order");

  const { product, removeItem, clearItems, totalPrice } =
    useContext(CartContext);

  function handleClick() {
    const order = {
      buyer: { name, email, phone },
      items: product,
      total: totalPrice(),
      date: new Date(),
    };
    console.log(order);
    addDoc(orderCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        setSentOrder(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (product.length === 0) {
    return (
      <>
        <Items>
          <Items.Header as="h5">Crimson Gamers</Items.Header>
          <Items.Body>
            <Items.Title>The cart is empty</Items.Title>
            <Link to="/">
              <Button className="btn btn-danger" variant="primary">
                Buy
              </Button>
            </Link>
          </Items.Body>
        </Items>
      </>
    );
  }

  return (
    <>
      <div className="map">
        {product.map((item) => (
          <div key={item.id}>
            <Items className="Card">
              <Items.Img className="ItemsImg" variant="top" src={item.image} />

              <Items.Body>
                <Items.Title>{item.title}</Items.Title>
                <Items.Text>{item.description}</Items.Text>
                <Items.Text className="text"> Value $ {item.price}</Items.Text>
                <p className="btn btn-dark" variant="primary">
                  {" "}
                  Quantity: {item.qty}
                </p>
                <p className="btn btn-dark" variant="primary">
                  {" "}
                  Subtotal:$ {item.qty * item.price}
                </p>

                <Button
                  className="btn btn-dark"
                  variant="primary"
                  onClick={() => removeItem(item.id)}
                >
                  delete product
                </Button>
              </Items.Body>
            </Items>
          </div>
        ))}

        <Table striped bordered hover size="dark">
          <thead>
            <tr>
              <th>
                <font color="white">Total value:</font>
              </th>
              <th>
                <font color="white"> $ {totalPrice()}</font>
              </th>
            </tr>
          </thead>
        </Table>
      </div>

      <div className="checkoutBody">
        <h1>
          <font color="white">Thanks for buying!</font>
        </h1>
        <p>
          <font color="white">
            Enter your information to complete the purchase
          </font>
        </p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          id="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <Button onClick={handleClick}>Make a purchase</Button>
        <Button variant="danger" onClick={() => clearItems()}>
          Empty cart
        </Button>
      </div>
      {sentOrder && (
        <div className="sentOrder">
          <h2>
            <font color="white">Order number:</font>
          </h2>
          <p className="orderId">
            <font color="white">{orderId}</font>
          </p>
          <p>
            <font color="white">
              We will contact you within 24 hours to manage the payment and make
              the shipment
            </font>
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;
