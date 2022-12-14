import "./App.css";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Cart from "./components/cart";
import { CartProvider } from "./components/cartContext";

function App() {
  return (
    <>
      <CartProvider />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemListContainer />} />
          <Route path="category/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
