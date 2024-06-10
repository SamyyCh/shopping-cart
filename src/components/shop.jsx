// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import Navigation from "./navigation";
import '../styles/shop.css';

function Shop() {
    const useProductData = () => {
        const [products, setProducts] = useState([]);
      
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
            };
            fetchProduct();
        }, []);
      
        return products;
    };

    const products = useProductData();

    return (
        <>
            <Navigation />
            <div className="shopPage">
                {products.map((product, index) => (
                    <div id="item" key={index}>
                        <ImageContainer image={product.image} />
                        <h2>{product.title}</h2>
                        <p>{product.price}$</p>
                        <button id="atc">Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Shop;

// Styled component for the image container
const ImageContainer = styled.div`
  width: auto;
  height: 250px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;
