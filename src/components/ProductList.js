import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions';

const ProductList = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        dispatch(fetchProducts('', event.target.value));
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search Products..." 
                value={searchTerm} 
                onChange={handleSearch} 
            />
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
