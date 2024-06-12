import { useState, useEffect } from "react";
import styled from 'styled-components';
import '../styles/shop.css';

const ImageContainer = styled.div`
  width: auto;
  height: 250px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

function Shop({ addToTotal, addToCart }) {
    const useProductData = () => {
        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
            const fetchProduct = async () => {
                const productData = [];
                for (let i = 1; i <= 9; i++) {
                    try {
                        const response = await fetch(`https://fakestoreapi.com/products/${i}`, { mode: "cors" });
                        const json = await response.json();
                        productData.push(json);
                    } catch (err) {
                        console.error('Failed to fetch product data');
                    }
                }
                setProducts(productData);
                setLoading(false);
            };
            fetchProduct();
        }, []);
      
        return { products, loading };
    };

    const { products, loading } = useProductData();

    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (index, value) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [index]: value,
        }));
    };

    return (
        <>
            <div className="shopPage">
                {loading ? (
                    <div id="loading">Loading...</div>
                ) : (
                products.map((product, index) => (
                    <div id="item" key={index}>
                        <ImageContainer image={product.image} />
                        <h2>{product.title}</h2>
                        <p>{Math.round(product.price)}$</p>
                        <div id="carting">
                            <input
                                id="quantity"
                                type="number"
                                value={quantities[index] || 1}
                                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                            />
                            <button
                                id="atc"
                                onClick={() => addToTotal(quantities[index] || 1, product.price)
                                        & addToCart(product.title, product.price, quantities[index] || 1)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                )))}
            </div>
        </>
    );
}

export default Shop;
