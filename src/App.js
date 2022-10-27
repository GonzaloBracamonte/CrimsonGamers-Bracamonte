import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:categoryId" element={<ItemListContainer />} />
          <Route path="item/:title" element={<ItemDetailContainer />} />
          <Route path="/*" element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
