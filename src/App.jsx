import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";

function App() {
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);

    const addToTotal = (quantity, price) => {
        setTotal(prevTotal => Math.ceil(prevTotal + (quantity * price)));
    }

    const addToCart = (product, price, quantity) => {
      const newProduct = { product, price, quantity };
      setCart(prevCart => [...prevCart, newProduct]);
  }

    return (
        <Router>
            <Navigation total={total} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop addToTotal={addToTotal} addToCart={addToCart}/>} />
                <Route path="/cart" element={<Cart cart={cart}/>} />
            </Routes>
        </Router>
    );
}

export default App;
