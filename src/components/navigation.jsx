import { Link } from "react-router-dom";
import '../styles/navigation.css';

function Navigation({ total }) {
    return (
        <div className="header">
            <div id="home">
                <Link to="/home">Home</Link>
            </div>
            <div id="shop">
                <Link to="/shop">Shop</Link>
            </div>
            <div id="cart">
                <Link to="/cart">Cart: {total}$</Link>
            </div>
        </div>
    );
}

export default Navigation;
