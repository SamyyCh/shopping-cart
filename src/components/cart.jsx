import { useState, useEffect } from "react";
import '../styles/cart.css';


function Cart({ cart }) {
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.product} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart