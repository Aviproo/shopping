import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { storeAction } from "./store/slices/storeSlice";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import Product from "./components/pages/Product";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Career from "./components/pages/Career";
import Contact from "./components/pages/Contact";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch(storeAction.setData(json)));
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
