import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Portal from "./pages/Portal";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import Assistant from "./pages/Assistant";
import Stores from "./pages/Stores";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white px-6">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/stores" element={<Stores />} />
      </Routes>
    </div>
  );
}
