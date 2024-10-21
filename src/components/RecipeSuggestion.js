import React from 'react';

// eslint-disable-next-line react/prop-types
const RecipeSuggestion = ({ recipe }) => {
    return (
        <div className='mt-4'>
            <h2 className='text-xl font-semibold mb-2'>Recette suggérée :</h2>
            <p className='whitespace-pre-wrap'>{recipe}</p>
        </div>
    );
};

export default RecipeSuggestion;
