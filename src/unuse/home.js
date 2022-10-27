// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import productApi from "../backend/productsMockup";
// import Card from "./card";
// import "./home.css";

// function Home() {
//   const [filter, setFilter] = useState("");
//   const [items, setItems] = useState([]);
//   const { cat } = useParams();

//   const getImages = () => {
//     setTimeout(() => {
//       const items = productApi;
//       setItems(items);
//     }, 2000);
//   };

//   useEffect(() => {
//     getImages();
//   }, []);

//   return (
//     <div className="principalContainer">
//       <h1>Product</h1>
//       <input
//         id="filter"
//         name="filter"
//         type="text"
//         value={filter}
//         onChange={(event) => setFilter(event.target.value)}
//       />
//       {/* <div className="cardsContainer">
//         {cat
//           ? items
//               .filter((product) => product.items.includes(filter))
//               .filter((product) => product.category === cat)
//               .map((product, i) => (
//                 <Card
//                   id={i}
//                   title={i}
//                   price={product.price}
//                   description={product.description}
//                   category={product.category}
//                 />
//               ))
//           : items
//               .filter((product) => product.items.includes(filter))
//               .map((product, i) => (
//                 <Card
//                   id={i}
//                   title={i}
//                   price={product.price}
//                   description={product.description}
//                   category={product.category}
//                 />
//               ))}
//       </div> */}
//     </div>
//   );
// }

// export default Home;
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
