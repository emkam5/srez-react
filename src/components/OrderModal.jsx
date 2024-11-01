// src/components/OrderModal.jsx
import React from 'react';
import Modal from 'react-modal';

const OrderModal = ({ open, handleClose, selectedAnimal }) => {
    return (
        <Modal isOpen={open} onRequestClose={handleClose} ariaHideApp={false}>
            {selectedAnimal ? (
                <div>
                    <h2>{selectedAnimal.name}</h2>
                    <img src={selectedAnimal.image} alt={selectedAnimal.name} style={{ width: '100%', borderRadius: '8px' }} />
                    <p>{selectedAnimal.description}</p>
                    <button onClick={handleClose}>Закрыть</button>
                </div>
            ) : (
                <p>Нет данных о животном.</p>
            )}
        </Modal>
    );
};

export default OrderModal;
