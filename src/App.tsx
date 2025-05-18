import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import ProductList from "./page/ProductList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}
