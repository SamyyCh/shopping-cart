import { useState } from "react"


function Navigation() {
    const [logo, setLogo] = useState("")
    const [shop, setShop] = useState("Shop")
    const [cart, setCart] = useState("Cart")

    return (
        <div className="header">
            <div id="logo">Logo</div>
            <div id="shop">
                <button onClick={shop}>Shop</button>
            </div>
            <div id="cart">
                <a href="cart-page" onClick={cart}>Cart</a>
            </div>
        </div>
    )
}

export default Navigation