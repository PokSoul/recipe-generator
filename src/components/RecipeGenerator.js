import React, { useState } from 'react';
import IngredientInput from './IngredientInput';
import RecipeSuggestion from './RecipeSuggestion';
import { getRecipeSuggestion } from '../api/recipeApi';

const RecipeGenerator = () => {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState(null);

    const handleAddIngredient = (ingredient) => {
        setIngredients([...ingredients, ingredient]);
    };

    const handleGenerateRecipe = async () => {
        try {
            const suggestion = await getRecipeSuggestion(ingredients);
            setRecipe(suggestion);
        } catch (error) {
            console.error('Error generating recipe:', error);
            setRecipe("Désolé, une erreur s'est produite lors de la génération de la recette.");
        }
    };

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>Générateur de Recettes</h1>
            <IngredientInput onAddIngredient={handleAddIngredient} />
            <div className='mt-4'>
                <h2 className='text-xl font-semibold mb-2'>Ingrédients ajoutés :</h2>
                <ul className='list-disc pl-5'>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <button
                className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleGenerateRecipe}
            >
                Générer une recette
            </button>
            {recipe && <RecipeSuggestion recipe={recipe} />}
        </div>
    );
};

export default RecipeGenerator;
