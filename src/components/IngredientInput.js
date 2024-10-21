/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const IngredientInput = ({ onAddIngredient }) => {
    const [ingredient, setIngredient] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ingredient.trim()) {
            onAddIngredient(ingredient.trim());
            setIngredient('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="Entrez un ingrédient"
                className="flex-grow p-2 border border-gray-300 rounded-l"
            />
            <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
            >
                Ajouter
            </button>
        </form>
    );
};

export default IngredientInput;
