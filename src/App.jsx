import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

function App() {
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);

    const addToTotal = (quantity, price) => {
        setTotal(prevTotal => Math.round(prevTotal + (quantity * price)));
    }

    const addToCart = (product, price, quantity) => {
      const newProduct = { product, price, quantity };
      setCart(prevCart => [...prevCart, newProduct]);
  }

  const removeFromCart = (indexToRemove, quantity, price) => {
    setCart(prevCart => prevCart.filter((item, index) => index !== indexToRemove));
    setTotal(prevTotal => Math.round(prevTotal - (quantity * price)))
  }

  const clearAll = () => {
    setTotal(0)
    setCart([])
  }

    return (
        <Router>
            <Navigation total={total} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop addToTotal={addToTotal} addToCart={addToCart}/>} />
                <Route path="/cart" element={<Cart cart={cart} total={total} removeFromCart={removeFromCart} clearAll={clearAll}/>} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
}

export default App;
