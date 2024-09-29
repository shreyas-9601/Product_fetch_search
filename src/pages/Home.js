import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/actions';
import CategorySelector from '../components/CategorySelector';
import ProductList from '../components/ProductList';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div>
            <h1>Welcome to the Product Search</h1>
            <CategorySelector />
            <ProductList />
        </div>
    );
};

export default Home;
