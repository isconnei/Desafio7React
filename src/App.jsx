import { useState } from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Footer from "./component/Footer/Footer";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/cartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </CartProvider>
  );
}

export default App;
