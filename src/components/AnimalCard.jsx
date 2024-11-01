// src/components/AnimalCard.jsx
import React from 'react';

const AnimalCard = ({ animal, onOrder, onDetails }) => {
    return (
        <div className="animal-card">
            <img src={animal.image} alt={animal.name} />
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
            <p>Цена: {animal.price} руб.</p>
            {animal.quantity > 0 ? (
                <button onClick={() => onOrder(animal)}>В корзину</button>
            ) : (
                <button disabled>Нет в наличии</button>
            )}
            {/* Кнопка для детальной информации */}
            <button onClick={() => onDetails(animal)}>Подробнее</button>
        </div>
    );
};

export default AnimalCard;
