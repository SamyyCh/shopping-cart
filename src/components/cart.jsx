import { Link } from "react-router-dom";
import '../styles/cart.css';


function Cart({ cart, total, removeFromCart, clearAll }) {
    return (
        <div className="cartPage">
            <h1>Cart</h1>
            <div className="gridTitles">
                <div id="title">Product Name</div>
                <div id="price">Price</div>
                <div id="amount">Quantity</div>
                <div id="delete">Remove</div>
            </div>
            <div className="cartGrid">
                {cart.map((item, index) => (
                    <div id="cartedItem" key={index}>
                        <div id="cartTitle">{item.product}</div>
                        <div id="cartPrice">{item.price}$</div>
                        <div id="cartQuantity">{item.quantity}</div>
                        <button id="remove" onClick={() => removeFromCart(index, item.quantity, item.price)}>X</button>
                    </div>
                ))}
            </div>
            <div id="cartTotal">
                Total : {total}$
            </div>
            <button id="checkout" onClick={() => clearAll()}>
                <Link to="/checkout">Checkout</Link>
            </button>
        </div>
    );
}

export default Cart