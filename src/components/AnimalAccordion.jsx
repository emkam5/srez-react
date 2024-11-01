// src/components/AnimalAccordion.jsx
import React, { useState } from 'react';

const AnimalAccordion = ({ animals }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {animals.map((animal, index) => (
                <div key={animal.id} className="accordion-item">
                    <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                        <h3>{animal.name}</h3>
                        <span>{openIndex === index ? '-' : '+'}</span> {/* Символ для проверки состояния аккордеона */}
                    </div>
                    {openIndex === index && (
                        <div className="accordion-content">
                            <p>{animal.description}</p>
                            <p>Цена: {animal.price} руб.</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AnimalAccordion;
