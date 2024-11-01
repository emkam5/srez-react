// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Поиск по названию"
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;
