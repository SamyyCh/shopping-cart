import { Link } from "react-router-dom";
import Navigation from "./navigation";
import '../styles/home.css'

function Home() {
    return (
    <>
        <div className="homePage">
            <div id="homeText">
                <h1>EXPLORE OUR STORE!</h1>
            </div>
            <button id="shopButton">
                <Link to="/shop">Shop</Link>
            </button>
        </div>
    </>
    )
}

export default Home