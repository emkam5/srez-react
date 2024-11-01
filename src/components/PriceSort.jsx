// src/components/PriceSort.jsx
import React from 'react';

const PriceSort = ({ onSort }) => {
    return (
        <div>
            <h3>Сортировать по цене:</h3>
            <select onChange={(e) => onSort(e.target.value)}>
                <option value="">Не сортировать</option>
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
            </select>
        </div>
    );
};

export default PriceSort;
