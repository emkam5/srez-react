// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import animalsData from './data/animals';
import SearchBar from './components/SearchBar';
import AnimalCard from './components/AnimalCard';
import OrderModal from './components/OrderModal';
import CategoryFilter from './components/CategoryFilter'; 
import PriceSort from './components/PriceSort'; 
import AnimalAccordion from './components/AnimalAccordion';
import Header from './components/header';

const App = () => {
    const [animals] = useState(animalsData);
    const [filteredAnimals, setFilteredAnimals] = useState(animalsData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const updateFilteredAnimals = () => {
        let updatedAnimals = [...animals];

        if (selectedCategory) {
            updatedAnimals = updatedAnimals.filter(animal => animal.category === selectedCategory);
        }

        if (searchTerm) {
            updatedAnimals = updatedAnimals.filter(animal =>
                animal.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortOrder) {
            updatedAnimals.sort((a, b) => 
                sortOrder === 'asc' ? a.price - b.price : b.price - a.price
            );
        }

        setFilteredAnimals(updatedAnimals);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        updateFilteredAnimals();
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        updateFilteredAnimals();
    };

    const handleSort = (order) => {
        setSortOrder(order);
        updateFilteredAnimals();
    };

    const handleOrder = (animal) => {
        setSelectedAnimal(animal);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedAnimal(null);
    };

    const handleDetails = (animal) => {
        setSelectedAnimal(animal);
        setIsModalOpen(true);
    };

    const categories = [...new Set(animals.map(animal => animal.category))];

    return (
        <Router>
            <div className="container">
                <Header/>
                <SearchBar onSearch={handleSearch} />
                <CategoryFilter categories={categories} onSelectCategory={handleSelectCategory} />
                <PriceSort onSort={handleSort} />
                <AnimalAccordion animals={filteredAnimals} />

                <div className="card-container">
                    {filteredAnimals.map(animal => (
                        <AnimalCard 
                            key={animal.id} 
                            animal={animal} 
                            onOrder={handleOrder} 
                            onDetails={handleDetails} // Передаем функцию обработки
                        />
                    ))}
                </div>
                
                <OrderModal open={isModalOpen} handleClose={handleCloseModal} selectedAnimal={selectedAnimal} />
            </div>
        </Router>
    );
};

export default App;
