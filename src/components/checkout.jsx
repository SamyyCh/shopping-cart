import { Link } from "react-router-dom";
import '../styles/checkout.css';

function Checkout() {
    return (
    <>
        <div className="checkoutPage">
            <div id="checkoutText">
                <h1>Still in development :/</h1>
                <p>Head back to the Home Page</p>
            </div>
            <button id="homeButton">
                <Link to="/home">Home</Link>
            </button>
        </div>
    </>
    )
}

export default Checkout