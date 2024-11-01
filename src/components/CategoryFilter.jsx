// src/components/CategoryFilter.jsx
import React from 'react';

const CategoryFilter = ({ categories, onSelectCategory }) => {
    return (
        <div>
            <h3>Фильтр по категориям:</h3>
            <select onChange={(e) => onSelectCategory(e.target.value)}>
                <option value="">Все категории</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
