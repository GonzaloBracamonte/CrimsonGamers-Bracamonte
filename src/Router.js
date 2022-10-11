import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";
import Services from "./components/services";
import CartWidget from "./components/cartWidget";
import NavBar from "./layout/NavBar";
import ItemList from "./components/itemListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="itemlist" element={<ItemList />} />
            <Route path="cartwidget" element={<CartWidget />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
