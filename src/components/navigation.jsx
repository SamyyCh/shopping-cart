import { Link } from "react-router-dom";
import '../styles/navigation.css'

function Navigation() {
    return (
        <div className="header">
            <div id="home">
                <Link to="/home">Home</Link>
            </div>
            <div id="shop">
                <Link to="/shop">Shop</Link>
            </div>
            <div id="cart">
                <Link to="/cart">Cart : -</Link>
            </div>
        </div>
    )
}

export default Navigation
