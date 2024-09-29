import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import { fetchCategories } from '../redux/actions'; // Ensure you're fetching categories too

const CategorySelector = () => {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories()); // Fetch categories on mount
    }, [dispatch]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        dispatch(fetchProducts(selectedCategory)); // Fetch products based on selected category
    };

    return (
        <select onChange={handleCategoryChange} defaultValue="">
            <option value="">All Categories</option>
            {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                    {category.name} {/* Display the category name */}
                </option>
            ))}
        </select>
    );
};

export default CategorySelector;
