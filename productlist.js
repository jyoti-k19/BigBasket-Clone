import React from 'react';
import Product from './product';
import './ProductList.css';
import { products } from '../data';

function ProductList({ addToCart }) {
    return (
        <div className="productList">
            {products.map(product => (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}

export default ProductList;
